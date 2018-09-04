const userReducer = (state = {
    isSignedIn: false
}, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return Object.assign({}, state, {
                isSignedIn: true
            }, action.payload);
        default:
            return state;
    }
};

export default userReducer;