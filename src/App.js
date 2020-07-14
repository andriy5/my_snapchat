import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import logo from './ghost512.png';
import "material-icons/iconfont/material-icons.css";
import './App.css';

import Welcome from "./Welcome";
import AllUsers from './AllUsers';
import AllSnaps from './AllSnaps';
import LogOut from './LogOut'
import SendSnap from './SendSnap';


function App() {
  return (
    <div>
      <Router>
        <div >
          <div id="navbar">
            <ul>
              <li>
                {/* <Link to="/all">Users</Link> */}
                <a href="/all"><span class="material-icons icon-white">people</span></a>
              </li>
              <li>
                <Link to="/snaps"><i class="material-icons icon-white">chat_bubble</i></Link>
              </li>
              <li>
                <Link to="/logout"><span class="material-icons icon-white exit">exit_to_app</span></Link>
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
