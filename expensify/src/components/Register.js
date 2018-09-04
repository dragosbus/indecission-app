import React, { Component } from 'react';
import InputDiv from './InputDiv';
import firebase from '../firebase/firebase';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUserMiddleware} from '../actions/user';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      repeatPass: '',
      validRegister: false
    };
  }

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

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

  onChangeRepeatPass = e => {
    this.setState({
      repeatPass: e.target.value
    });
  };

  register = e => {
    e.preventDefault();
    this.props.register({
      email: this.state.email,
      password: this.state.password
    });
    this.props.history.push('/');
  };

  render() {
    return (
      <form className="register-page" onSubmit={this.register}>
        <InputDiv idHTML="register-name" label="Name" type="text" value={this.state.name} onChangeInput={this.onChangeName}/>
        <InputDiv idHTML="register-email" label="Email" type="email" value={this.state.email} onChangeInput={this.onChangeEmail}/>
        <InputDiv idHTML="register-pass" label="Password" type="password" value={this.state.password} onChangeInput={this.onChangePass}/>
        <InputDiv idHTML="register-repeat-pass" label="Repeat password" type="password" value={this.state.repeatPass} onChangeInput={this.onChangeRepeatPass}/>
        <button type="submit" disabled={this.state.validRegister}>Register</button>
      </form>
    );
  }
}

export default Register;
