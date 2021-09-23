import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import AddPotluck from './components/AddPotluck';
import Potlucks from './components/Potlucks';
import { loginStatus } from './actions';

import './styles/App.css';

function App(props) {
  useEffect(() => {
    if(localStorage.getItem('token')) {
      props.loginStatus(true)
    } else {
      props.loginStatus(false)
    }
  }, []);

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

const mapStateToProps = state => {
  return ({
    isLogin: state.login.isLogin
  })
}

export default connect(mapStateToProps, {loginStatus})(App);