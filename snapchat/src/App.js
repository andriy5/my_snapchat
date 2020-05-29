import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './ghost512.png';
import './App.css';

import Welcome from "./Welcome";
import AllUsers from './AllUsers';
import AllSnaps from './AllSnaps';


function App() {
  return (
    <div>
      {/* <Welcome /> */}
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/all">
              <AllUsers />
            </Route>
            <Route path="/snaps">
              <AllSnaps />
            </Route>
          </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
