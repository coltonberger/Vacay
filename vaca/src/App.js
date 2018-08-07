import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage'
import SignUpPage from './components/pages/SignUpPage'
import DashBoardPage from './components/pages/DashBoardPage'

import './App.css';

class App extends Component {


  render() {
    

    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component = { LoginPage } />
          <Route path="/signup" exact component = { SignUpPage } />
          <Route path="/dashboard" exact component = { DashBoardPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
