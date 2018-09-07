import React, { Component } from 'react';
import InputDiv from './InputDiv';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      repeatPass: '',
      message: '',
      isValidRegister: false
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
    let { name, email, password, repeatPass } = this.state;
    if (!name || !email || !password || !repeatPass) {
      this.setState({ message: 'Must fill all inputs', isValidRegister: false });
    } else {
      if (password !== repeatPass) {
        this.setState({ message: 'The passwords must match', isValidRegister: false });
      } else {
        this.props.register({
          email: this.state.email,
          password: this.state.password
        });
        this.setState({ message: 'registered succesfully', isValidRegister: true });
        this.props.history.push('/');
      }
    }
  };

  render() {
    return (
      <form className="register-page" onSubmit={this.register}>
        <span className={this.state.isValidRegister ? 'flash-error' : 'flash-success'}>{this.state.message}</span>
        <InputDiv
          idHTML="register-name"
          label="Name"
          type="text"
          value={this.state.name}
          onChangeInput={this.onChangeName}
        />
        <InputDiv
          idHTML="register-email"
          label="Email"
          type="email"
          value={this.state.email}
          onChangeInput={this.onChangeEmail}
        />
        <InputDiv
          idHTML="register-pass"
          label="Password"
          type="password"
          value={this.state.password}
          onChangeInput={this.onChangePass}
        />
        <InputDiv
          idHTML="register-repeat-pass"
          label="Repeat password"
          type="password"
          value={this.state.repeatPass}
          onChangeInput={this.onChangeRepeatPass}
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Register;
