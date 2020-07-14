import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", isAuth: false};

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("http://snapi.epitech.eu/connection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.token);
        localStorage.setItem('tokenAuth', data.data.token); 
        console.log(localStorage.getItem('tokenAuth'))
        this.setState({isAuth: true})
      });
  }

  render() {
    if(this.state.isAuth == true){
      window.location.href = "/all";
      // return (
      // <Route>
      //   <Redirect to="/all"/>
      // </Route>
      // )
    }
    else {
      return (
        <div>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <label for="email">E-mail </label>
            <input
              type="email"
              id="email"
              value={this.state.value}
              onChange={this.handleEmail}
            />
            <br />
            <label for="password">Password </label>
            <input
              type="password"
              id="password"
              value={this.state.value}
              onChange={this.handlePassword}
            />
            <br />
            <input type="submit" value="Connect" />
          </form>
        </div>
      );
    }
  }
}
