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
      userSelected: ''
    };

    this.clickUser = this.clickUser.bind(this);
  }

  componentDidMount() {
    fetch("http://snapi.epitech.eu/all", {
      method: "GET",
      headers: { token: "5zoifgLKtviRDgRV8qQipdbP" },
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
    document.getElementsByTagName('ul')[0].style.display = "none";
  }

  render() {
    const users = this.state.data

    if (!this.state.isReady) {
      return (
      <div>It comes...</div>
      );
    }
    else {
      return (
        <Router>
          <div>
            <ul>
            { users.data.map((user, index) => (
              <li key={index}>
                <Link to="/snap" onClick={this.clickUser}>{user.email}</Link>
                {/* <a href="#">
                  {user.email}
                </a> */}
              </li>
              ))}
            </ul>

            <Switch>
              <Route path="/snap">
                <SendSnap receiver={this.state.userSelected}/>
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
    
  }
}