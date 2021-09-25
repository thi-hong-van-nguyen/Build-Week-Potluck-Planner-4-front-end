import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import AddPotluck from './components/AddPotluck';
import AddGuests from './components/AddGuests';
import AddFoods from './components/AddFoods';
import Potlucks from './components/Potlucks';
import PotluckDetails from './components/PotluckDetails';
import { loginStatus } from './actions';
import PrivateRoute from './components/helpers/PrivateRoute';

import './styles/App.css';

function App(props) {
  const { loginStatus } = props
  useEffect(() => {
    loginStatus(localStorage.getItem('token'))
  }, []);

  return (
    <div className="App">
      <NavBar />

      <Switch>

        <Route path='/Log_in'>
          <Login/>
        </Route>

        <Route path='/Log_out'>
          <Logout/>
        </Route>

        <Route path='/Sign_up'>
          <Signup/>
        </Route>

        <PrivateRoute path='/Create_Potluck' component={AddPotluck}/>

        <PrivateRoute path='/add_guests' component={AddGuests}/>

        <PrivateRoute path='/add_foods' component={AddFoods}/>

        <PrivateRoute path='/potlucks/:potluck_id' component={PotluckDetails}/>

        <Route path='/View_Potlucks'>
          <Potlucks/>
        </Route>

        <Route path='/'>
          <Home/>
        </Route>

      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    isLogin: state.login.isLogin
  })
}

export default connect(mapStateToProps, {loginStatus})(App);