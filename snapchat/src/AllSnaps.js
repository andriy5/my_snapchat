import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation, 
  useParams
} from "react-router-dom";

import ReceiveSnap from './ReceiveSnap';

export default class AllSnaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isReady: false,
      snapSelected: ''
    };
  }

  componentDidMount() {
    fetch("http://snapi.epitech.eu/snaps", {
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
                <Link to={`/snap/${user.snap_id}`}>{user.from}</Link>
              </li>
              ))}
            </ul>

            <Switch>
              <Route path="/snap/:id" component={ReceiveSnap} />
            </Switch>
          </div>
        </Router>
      );
    }  
  }
}