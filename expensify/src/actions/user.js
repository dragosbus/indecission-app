import {firebase} from '../firebase/firebase';

export const loginUser = user => ({
    type:'LOGIN_USER',
    payload: user
});

export const errorLogIn = error => ({
    type: 'ERROR_LOGIN',
    payload: error
});

export const getCurrentUser = user => ({
    type: 'CURRENT_USER',
    payload: user
});

export const logOut = () => ({
    type: 'LOG_OUT'
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

export const getCurrentUserMiddleware = () => dispatch => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
         dispatch(getCurrentUser(user));
        } else {
          console.log('not user');
        }
      });
};