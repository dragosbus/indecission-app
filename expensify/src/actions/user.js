import {firebase} from '../firebase/firebase';

export const loginUser = user => ({
    type:'LOGIN_USER',
    payload: user
});

export const errorLogIn = error => ({
    type: 'ERROR_LOGIN',
    payload: error
});

export const registerUserMiddleware = user => dispatch => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(()=>{
        dispatch(loginUser(user));
    }).catch(err=>{
        dispatch(errorLogIn(err));
    });   
};

export const loggedUserMiddleware = user => dispatch => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(()=>{
        dispatch(loginUser(user));
    }).catch(err=>console.log(err));
    
};