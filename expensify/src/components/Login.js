import React, { Component } from 'react';
import InputDiv from './InputDiv';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  onChangeEmail = e => {

  };

  onChangePass = e => {
    
  }

  render() {
    return (
      <form className="login-page">
        <InputDiv type="text" idHTML="login-email" label="Email"/>
        <InputDiv type="password" idHTML="login-pass" label="Password"/>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
