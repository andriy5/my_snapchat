import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import logo from './ghost512.png';
import './App.css';

import Welcome from "./Welcome";
import AllUsers from './AllUsers';
import AllSnaps from './AllSnaps';
import LogOut from './LogOut'


function App() {
  return (
    <div>
      {/* <Welcome /> */}
      <Router>
        <div >
          <div id="navbar">
            <ul>
              <li>
                <Link to="/all">Users</Link>
              </li>
              <li>
                <Link to="/snaps">Snap</Link>
              </li>
              <li>
                <Link to="/logout">Log Out</Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/">
              {localStorage.getItem('tokenAuth') ? <Redirect to="/all" /> : <Redirect to="/welcome" />}
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/all">
              <AllUsers />
            </Route>
            <Route path="/snaps">
              <AllSnaps />
            </Route>
            <Route path="/logout">
              <LogOut />
            </Route>
          </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
