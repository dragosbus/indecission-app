import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/css/index.css';

import { Header } from './components/Header';
import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import { ExpenseDashboardPage } from './components/ExpenseDashboardPage';
import { HelpPage } from './components/HelpPage';
import { NotFound } from './components/NotFound';
import Login from './components/Login';

import './firebase/firebase';
import { loginUser } from './actions/user';

class App extends Component {
  state = {
    isSignedIn: false
  };
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header isSignedIn={this.state.isSignedIn} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return this.state.isSignedIn ? <ExpenseDashboardPage /> : <Login />;
                }}
              />
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

export default connect()(App);
