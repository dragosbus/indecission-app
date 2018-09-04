import React from 'react';
import InputDiv from './InputDiv';

const Register = props => {
  return (
    <form className="register-page">
      <InputDiv idHTML="register-name" label="Name" type="text" />
      <InputDiv idHTML="register-email" label="Email" type="email" />
      <InputDiv idHTML="register-pass" label="Password" type="password" />
      <InputDiv idHTML="register-repeat-pass" label="Repeat password" type="password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
