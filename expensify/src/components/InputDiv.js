import React from 'react';

const InputDiv = props => {
  return (
    <div>
      <label htmlFor={props.idHTML}>{props.label}</label>
      <input type={props.type} className={props.idHTML} id={props.idHTML} />
    </div>
  );
};

export default InputDiv;
