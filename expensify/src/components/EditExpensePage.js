import React from 'react';


export const EditExpensePage = (props) => {
  console.log(props);
    return <div>This is from my edit expense component {props.match.params.id}</div>;
  };