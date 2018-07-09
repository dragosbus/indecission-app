import React, { Component } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(name) {
    let newTask = {
      id: this.state.id,
      name: name
    };

    this.setState(prevState => {
      return {
        id: this.state.id + 1,
        tasks: prevState.tasks.concat(newTask)
      };
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Form addTask={this.addTask} />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
