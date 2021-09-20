import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import AddPotluck from './components/AddPotluck';

import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/logout'>
          <Logout />
        </Route>

        <Route path='/add'>
          <AddPotluck />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
