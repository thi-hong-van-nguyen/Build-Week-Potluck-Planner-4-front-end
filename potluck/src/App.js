import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import AddPotluck from './components/AddPotluck';
import Potlucks from './components/Potlucks';

import './App.css';

const initialPotluck = [];

function App() {
  const [potlucks, setPotlucks] = useState(initialPotluck)

  // const getPotlucks = () => {
  //   axios.get('api')
  //   .then(res => {
  //     setPotlucks(res.data);
  //   }).catch(err => console.error(err))
  // }

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

        <Route path='/signup'>
          <Signup />
        </Route>

        {/* PrivateRoute here */}
        <Route path='/add'>
          <AddPotluck />
        </Route>

        {/* PrivateRoute here */}
        <Route path='/potlucks'>
          <Potlucks />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>

      {/* Footer??? */}

    </div>
  );
}

export default App;
