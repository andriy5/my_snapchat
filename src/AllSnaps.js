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
      duration: null
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem('tokenAuth'))
    let localToken = localStorage.getItem('tokenAuth')

    fetch("http://snapi.epitech.eu/snaps", {
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

  changeDuration(duration) {
    this.setState({duration})
  }
  
  render() {
    const users = this.state.data

    if (!this.state.isReady) {
      return (
      <div>It comes...</div>
      );
    }
    else {
      console.log(users.data)
      if (users.data.length == 0){
        return <h3>No snap received</h3>
      }
      else{
        return (
          <Router>
            <div id="list-users">
              <h3>You received {users.data.length} snaps !</h3>
              <ul>
              { users.data.map((user, index) => (
                // <li key={index} onClick={() => this.changeDuration(user.duration)}>
                //   <Link to={`/snap/${user.snap_id}`}>{user.from}</Link>
                // </li>

                <li key={index} className="align-mi" onClick={() => this.changeDuration(user.duration)}>
                <i className="material-icons">person</i><Link to={`/snap/${user.snap_id}`}>
                  {user.from}
                  </Link><i className="material-icons send-logo">keyboard_arrow_right</i>
                </li>
                ))}
              </ul>
  
                  <Switch>
                    <Route path="/snap/:id" 
                    render={ (props) => <ReceiveSnap {...props} duration={this.state.duration} /> } />
                  </Switch>
            </div>
          </Router>
        );
        
      }
    }  
  }
}
