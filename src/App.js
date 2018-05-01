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
        <Counter/>
      </main>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
  }
  
  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

export default App;
