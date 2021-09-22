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
            axios.post("https://potluck-planner-3.herokuapp.com//api/users/register", credentials)
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
            <div>
            <h1>Signup Today To Create A Potluck!</h1>
            </div>
            <div className='errors'>
                <div style={{ color: 'red' }}>{errors}</div>
            </div>

            <div className="signup-container">
                <form className='signup-form' onSubmit={signup}>
                    <label>Username:
                        <input
                            name="username"
                            placeholder="Username"
                            value={credentials.username}
                            type="text"
                            onChange={changeHandler}
                        />
                    </label>

                    <label>Password:
                        <input
                            name="password"
                            placeholder="Password"
                            value={credentials.password}
                            type="password"
                            onChange={changeHandler}
                        />
                    </label>
                    <button >Signup</button>
                </form>
            </div>
        </div>
    )
}