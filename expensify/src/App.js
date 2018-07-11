import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/css/index.css';

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={ExpenseDashboardPage} />
            <Route exact path="/create" component={AddExpensePage} />
            <Route exact path="edit" component={EditExpensePage} />
            <Route exact path="help" component={HelpPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
