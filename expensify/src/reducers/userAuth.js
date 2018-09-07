const userAuth = (state={}, action) => {
    switch (action.type) {
        case 'CURRENT_USER':
            return action.payload;
        case 'LOG_OUT':
        console.log(state);
            return {};
        default:
            return state;
    }
};

export default userAuth;