import React, { Component } from 'react';

export class Form extends Component {
  addTask(e) {
    e.preventDefault();
    this.props.addTask(this._valueTask.value);
  }

  render() {
    return (
      <form onSubmit={this.addTask.bind(this)}>
        <input ref={inp => (this._valueTask = inp)} type="text" />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
