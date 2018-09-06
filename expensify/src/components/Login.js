import React, { Component } from 'react';
import InputDiv from './InputDiv';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChangePass = e => {
    this.setState({
      password: e.target.value
    });
  };

  onLoginSubmit = e => {
    e.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
    this.props.history.push('/');
  }
  render() {
    let {email, password} = this.state;
    return (
      <form className="login-page" onSubmit={this.onLoginSubmit}>
        <InputDiv type="text" idHTML="login-email" label="Email" value={email} onChangeInput={this.onChangeEmail}/>
        <InputDiv type="password" idHTML="login-pass" label="Password" value={password} onChangeInput={this.onChangePass}/>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
