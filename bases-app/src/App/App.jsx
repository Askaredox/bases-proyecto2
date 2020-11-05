import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Home from '../Home/Home';
import Login from '../Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/crud' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
