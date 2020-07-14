
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import SendSnap from "./SendSnap";

export default class AllUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isReady: false,
      userSelected: '',

    };

    this.clickUser = this.clickUser.bind(this);
  }

  componentDidMount() {
    console.log(localStorage.getItem('tokenAuth'))
    let localToken = localStorage.getItem('tokenAuth')

    fetch("http://snapi.epitech.eu/all", {
      method: "GET",
      headers: { token: localToken },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isReady: true,
          data });
        console.log(this.state.data);
      });
  }

  clickUser(e) {
    this.setState({userSelected: e.target.text})
    document.getElementById("list-users").style.display = "none";
  }

  render() {
    const users = this.state.data

    if (!this.state.isReady) {
      return (
      <div className="message">It comes...</div>
      );
    }
    else {
      return (
        <Router>
          <div id="list-users">
            <ul>
            { users.data.map((user, index) => (
              <li key={index} className="align-mi">
                <i className="material-icons">person</i><Link to="/snap" onClick={this.clickUser}>
                  {user.email}
                  {/* {user.email.length < 30 
                  ? user.email 
                  : user.email.substr(0, 30).trim() + user.email.substr(30).trim()} */}
                  </Link><i className="material-icons send-logo">keyboard_arrow_right</i>
              </li>
              ))}
            </ul>

          </div>
            <Switch>
              <Route path="/snap">
                <SendSnap receiver={this.state.userSelected}/>
              </Route>
            </Switch>
        </Router>
      );
    }
    
  }
}