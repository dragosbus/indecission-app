import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/css/index.css';
import { bindActionCreators } from 'redux';
import { registerUserMiddleware, loggedUserMiddleware } from '../src/actions/user';
import { Header } from './components/Header';
import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import { ExpenseDashboardPage } from './components/ExpenseDashboardPage';
import { HelpPage } from './components/HelpPage';
import { NotFound } from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';

import './firebase/firebase';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header isSignedIn={this.props.user.isSignedIn} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => {
                  return this.props.user.isSignedIn ? (
                    <ExpenseDashboardPage displayName={this.props.user.email} />
                  ) : (
                    <Login history={props.history} login={this.props.login} />
                  );
                }}
              />
              <Route
                path="/register"
                render={props => {
                  return <Register register={this.props.register} history={props.history} code={this.props.user.code}/>;
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

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  register: bindActionCreators(registerUserMiddleware, dispatch),
  login: bindActionCreators(loggedUserMiddleware, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
