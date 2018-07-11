import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles/css/index.css';

import { Header } from './components/Header';
import {AddExpensePage} from './components/AddExpensePage';
import {EditExpensePage} from './components/EditExpensePage';
import {ExpenseDashboardPage} from './components/ExpenseDashboardPage';
import {HelpPage} from './components/HelpPage';
import {NotFound} from './components/NotFound';



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
              <Route path="/edit/:id" component={EditExpensePage} />
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
