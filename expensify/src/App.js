import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles/css/index.css';

import { Header } from './components/Header';

const ExpenseDashboardPage = () => {
  return <div>This is from my dashboard component</div>;
};

const AddExpensePage = () => {
  return <div>This is from my add expense component</div>;
};

const EditExpensePage = () => {
  return <div>This is from my edit expense component</div>;
};

const HelpPage = () => {
  return <div>This is from my help component</div>;
};

const NotFound = () => {
  return (
    <div>
      <h1>Not found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={ExpenseDashboardPage} />
              <Route exact path="/create" component={AddExpensePage} />
              <Route exact path="/edit" component={EditExpensePage} />
              <Route exact path="/help" component={HelpPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
