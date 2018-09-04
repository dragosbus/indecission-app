import React from 'react';

const Register = props => {
    return(
        <form>
            <input type="text" className="register-name"/>
            <input type="email" className="register-email"/>
            <input type="password" className="register-pass"/>
            <input type="password" className="register-repeat-pass"/>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;