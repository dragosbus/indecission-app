const userReducer = (state = {
    isSignedIn: false
}, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return Object.assign({}, {
                isSignedIn: true
            }, action.payload);
        case 'ERROR_LOGIN':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export default userReducer;