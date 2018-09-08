import React, { Component } from 'react';
import { firebase } from '../firebase/firebase';
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
      isValidRegister: false,
      showMessage: false
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

  registerUser = async () => {
    let { email, password } = this.state;
    const firestore = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        this.setState({ message: err.code, isValidRegister: false });
      });

    return firestore;
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
        this.registerUser().then(() => {
          console.log(this.state.message);
          if (this.state.message === 'auth/email-already-in-use') {
            this.setState({
              message: 'Email already used',
              isValidRegister: false
            });
          } else if (this.state.message === 'auth/weak-password') {
            this.setState({
              message: 'Weak password.The password must be 6 characters or more',
              isValidRegister: false
            });
          } else {
            this.setState({
              message: 'Registered successfully',
              isValidRegister: true
            });
            this.props.userSession();
            setTimeout(() => {
              this.props.history.push('/');
            }, 1000);
          }
        });
      }
    }
    this.setState({ showMessage: true });
  };

  render() {
    return (
      <form className="register-page" onSubmit={this.register}>
        <span
          style={{ display: this.state.showMessage ? 'block' : 'none' }}
          className={!this.state.isValidRegister ? 'flash flash-error' : 'flash flash-success'}
        >
          {this.state.message}
        </span>
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
