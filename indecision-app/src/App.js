import React, { Component } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import {OptionModal} from './components/OptionModal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      tasks: [],
      selectedOption: undefined
    };
    this.addTask = this.addTask.bind(this);
    this.pickOption = this.pickOption.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentWillMount() {
    this.setState({
      tasks: JSON.parse(localStorage.tasks)
    });
  }

  componentDidMount() {
    if(!localStorage.tasks) {
      localStorage.tasks = JSON.stringify([]);
    } else {
      localStorage.tasks = JSON.stringify(this.state.tasks);
    }
  }

  componentDidUpdate() {
    localStorage.tasks = JSON.stringify(this.state.tasks);
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

  pickOption() {
    let randomIndex = Math.floor(Math.random() * (this.state.tasks.length - 1));
    let randomItem;

    if (!this.state.tasks[randomIndex]) {
      randomItem = 'The list is empty';
    } else {
      randomItem = this.state.tasks[randomIndex].name;
    }

    this.setState({
      selectedOption: randomItem
    });
  }

  deleteTask(index) {
    //reset id of the tasks
    this.state.tasks.forEach((task, i) => {
      task.id = i + 1;
    });
    this.setState(
      prevState => {
        return {
          tasks: prevState.tasks.filter(task => task.id !== index + 1)
        };
      },
      () => console.log(this.state.tasks)
    );
  }

  hideModal() {
    this.setState({
      selectedOption: undefined
    });
  }

  render() {
    return (
      <div className="app">
        <Header pickOption={this.pickOption} />
        <Form addTask={this.addTask} />
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
        <OptionModal selectedOption={this.state.selectedOption} hide={this.hideModal}/>
      </div>
    );
  }
}

export default App;
