import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import AddPotluck from './components/AddPotluck';
import schema from './components/PotluckSchema';
import './App.css';

const initialFormValues = {
  potluck_name: '',
  date: '',
  time: '',
  location: '',
}

const initialFormErrors = {
  potluck_name: '',
  date: '',
  time: '',
  location: '',
}


const initialPotluck = [];
const initialDisabled = true;

function App() {
  const [potlucks, setPotlucks] = useState(initialPotluck)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getPotlucks = () => {
    axios.get('api')
    .then(res => {
      setPotlucks(res.data);
    }).catch(err => console.error(err))
  }

  const postNewPotluck = newPotluck => {
    axios.post('api', newPotluck)
      .then(res => {
        setPotlucks([res.data, ...potlucks]);
        setFormValues(initialFormValues);
      }).catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPotluck = {
      name: formValues.name.trim(),
      event: formValues.event.trim(),
      description: formValues.description.trim(),     
    }
    postNewPotluck(newPotluck);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
 
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
          <AddPotluck 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
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
