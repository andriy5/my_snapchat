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
  constructor() {
    super()

    this.state = {ready: false};
  }

  async componentDidMount() {
    await window.localStorage.removeItem("tokenAuth");
    this.setState({ready: true});
  }
  

  render() {
    let ready = this.state.ready; 
    if (ready) {
      return (
        <div>
          <Route path="/">
            <Redirect to="/welcome" />
          </Route>
        </div>
      )
    }
    else {
      return (
        <div>
          Disconnecting...
        </div>
      )
    }
  }
}
