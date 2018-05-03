import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <h1>Indecission App</h1>
      </header>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <main>
        <Form />
      </main>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    
    if (this._inputElement.value) {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value = '';
    }
  }

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.submitForm}>
          <input type="text" ref={(a) => this._inputElement = a} />
          <input type="submit" value="Add Option" />
        </form>
        <List tasks={this.state.items}/>
      </div>
    );
  }
}

class List extends Component {
  render() {
    return (
      <ul className="tasks">
        {this.props.tasks.map((task, i) => <ElementList key={i} text={task.text} date={task.key}/>)}
      </ul>
    );
  }
}

class ElementList extends Component {
  render() {
    return (
      <li>
        <p className="task-name">{this.props.text}</p>
        <p className="task-date">{this.props.date}</p>
      </li>
    );
  }
}

export default App;
