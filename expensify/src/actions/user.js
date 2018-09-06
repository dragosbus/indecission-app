import {firebase} from '../firebase/firebase';

export const loginUser = user => ({
    type:'LOGIN_USER',
    payload: user
});

export const registerUserMiddleware = user => dispatch => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(()=>{
        dispatch(loginUser(user));
    }).catch(err=>console.log(err));   
};

export const loggedUserMiddleware = user => dispatch => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(()=>{
        dispatch(loginUser(user));
        console.log(user);
    }).catch(err=>console.log(err));
    
};