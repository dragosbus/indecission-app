import {firebase} from '../firebase/firebase';

export const loginUser = user => ({
    type:'LOGIN_USER',
    payload: user
});

export const userSession = user => ({
    type: 'USER_SESSION',
    payload: user
});

export const userSessionMiddleware = () => dispatch => {
    firebase.auth().onAuthStateChanged(user=>{
        console.log(user);
        dispatch(userSession({
            id: user.uid,
            email: user.email
        }));
      });
};