import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import App from './App'

export default class LogOut extends Component {
  componentDidMount() {
    window.localStorage.removeItem("tokenAuth");
  }
  

  render() {
    return (
      <div>
        <Redirect to="/" />
        <Route path="/">
          <App />
        </Route>
      </div>
    )
  }
}
