import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from "yup";
// import schema from './'
// import { axiosWithAuth } from '../utils/axiosWithAuth';


const signUpValue = {
    username: "",
    password: "",
}

// const initialErrors = {
//     username: "",
//     password: "",
// }

export default function Signup() {
    const [credentials, setCredentials] = useState(signUpValue);
    const [errors, setErrors] = useState('');
    const { push } = useHistory()

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setCredentials({
            ...credentials,
            [name]: value
        })
    };

    const signup = (event) => {
        event.preventDefault();
        if(credentials.username === '' || credentials.password === '') {
            setErrors('username and password are required fields.')
        } else {
            axios.post("https://potluck-planner-3.herokuapp.com/api/users/register", credentials)
                .then(res => {
                    console.log(res)
                    push('/login')
                })
                .catch(err => {
                    setErrors('Please try again')
                })
        }
    };

    return (
        <div className="signupPage">
            <div className="img">
            <h1 className="h1">Signup Today To Create A Potluck!</h1>
            </div>
            <div className='errors'>
                <div style={{ color: 'red' }}>{errors}</div>
            </div>
                <form className='signup-form' onSubmit={signup}>
                    <h2 className='signup'>Username:</h2>
                    <label >
                        <input
                            className="signup-input"
                            name="username"
                            placeholder="Username"
                            value={credentials.username}
                            type="text"
                            onChange={changeHandler}
                        />
                    </label>
                    <h2 className='signup'>Password:</h2>
                    <label >
                        <input
                            className="signup-input"
                            name="password"
                            placeholder="Password"
                            value={credentials.password}
                            type="password"
                            onChange={changeHandler}
                        />
                    </label>
                    <button className="signup-button">Signup</button>

                </form>


            </div>
        </div>
    )
}