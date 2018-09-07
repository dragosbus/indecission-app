import {firebase} from '../firebase/firebase';

export const loginUser = user => ({
    type:'LOGIN_USER',
    payload: user
});