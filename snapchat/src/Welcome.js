import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import logo from './ghost512.png';
import './Welcome.css';

import Login from './Login';
import Register from './Register';


export default class Welcome extends Component {
  componentDidMount() {
    document.getElementById('navbar').style.display = "none";
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome on My Snapchat !
          </p>
          <div>
            <BrowserRouter>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
              </Switch>
              <div>
                <Link to="/login">Login</Link>&nbsp;
                <Link to="/register">Register</Link>
              </div>
            </BrowserRouter>
          </div>
        </header>
      </div>
    );
  }
}
