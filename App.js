import React from 'react';
import{BrowserRouter as Router,NavLink} from 'react-router-dom';
import {Route, Switch} from "react-router-dom";
import Login from './Login';
import Welcome from './Welcome';

export default function App() {
  return (
    <Router>
      <Welcome />
      <Switch>
        <Route to="/h" component={Login} hidden />
      </Switch>
    </Router>
  )
}
