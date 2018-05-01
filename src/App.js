import React, { Component } from 'react';
import './App.css';

const lists = [];

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
        <List/>
      </main>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    let val = e.target.elements.option.value;
    lists.push(val);
    this.setState({
      val: val
    });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" name="option" />
        <input type="submit" value="Add Option"/>
      </form>
    );
  }
}

class List extends Component {
  render() {
    return (
      <ul>
        {lists.map(l => <ElementList value={l}/>)}
      </ul>
    );
  }
}

class ElementList extends Component {
  render() {
    return (
      <li>{this.props.value}</li>
    );
  }
}

export default App;
