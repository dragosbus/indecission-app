import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    render() {
        return(
            <form>
                <input type="text" className="email"/>
                <input type="password" className="password"/>
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default Login;