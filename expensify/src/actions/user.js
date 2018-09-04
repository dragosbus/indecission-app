export const registerUser = user => ({
    type: 'REGISTER_USER',
    user
});

export const loginUser = user => ({
    type:'LOGIN_USER',
    user
});