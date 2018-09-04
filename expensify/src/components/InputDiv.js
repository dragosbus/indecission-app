import React from 'react';

const InputDiv = props => {
  return (
    <div>
      <label htmlFor={props.idHTML}>{props.label}</label>
      <input type={props.type} className={props.idHTML} id={props.idHTML} value={props.value} onChange={props.onChangeInput}/>
    </div>
  );
};

export default InputDiv;
