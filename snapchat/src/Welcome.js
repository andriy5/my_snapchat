import React, { Component } from 'react';
import logo from './ghost512.png';
import './Welcome.css';

import Login from './Login';
// import Register from './Register';


export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome on My Snapchat !
          </p>
          <Login />
        </header>
      </div>
    );
  }
}
