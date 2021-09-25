import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserSchema from '../validations/UserSchema';
import Form from "./helpers/Form"

const signUpValue = {
    username: "",
    password: "",
}

export default function Signup() {
    const { push } = useHistory()

    const signup = credentials => {
        axios.post("https://potluck-planner-3.herokuapp.com/api/users/register", credentials)
            .then(res => {
                console.log(res)
                push('/Login_in')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="signupPage">
            <div>
                <h1 style={{textAlign: 'center', color: 'rgba(163, 22, 11, 1)'}}>
                    Signup Today To Create A Potluck!
                </h1>
            </div>
            <div className="signup-container">
                <Form
                    initialState={signUpValue}
                    submit={signup}
                    schema={UserSchema}
                />
            </div>
        </div>
    )
}
