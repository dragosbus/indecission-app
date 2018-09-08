import {
    firebase
} from '../firebase/firebase';

export const loginUser = user => ({
    type: 'LOGIN_USER',
    payload: user
});

export const errorLogin = err => ({
    type: 'ERROR_LOGIN',
    payload: err
});

export const userSession = user => ({
    type: 'USER_SESSION',
    payload: user
});

export const loginUserMiddleware = user => dispatch => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(() => {
            dispatch(loginUser(user));
        })
        .catch(function (error) {
            dispatch(errorLogin({
                ...error
            }))
        });
};

export const userSessionMiddleware = () => dispatch => {
    firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        dispatch(userSession({
            id: user.uid,
            email: user.email
        }));
    });
};