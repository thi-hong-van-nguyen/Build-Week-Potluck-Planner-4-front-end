import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Form, Label, Input, Button } from '../styling/loginStyle';
import { loginStatus } from '../actions';

const initialFormState = {
    username: "",
    password: "",
};

const Login = (props) => {
    const { push } = useHistory();
    const [formState, setFormState] = useState(initialFormState);
    const [error, setError] = useState('');

    const inputChange = e => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });

    };

    const handleLogin = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/users/login', formState)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', formState.username);
                props.loginStatus(true);
                push('/')
            })
            .catch(err => {
                setError('username and/or password is invalid.')
            })
    };

    return (
        <>
            <Form onSubmit={handleLogin} className='login-form' >
                <Label className='login-label' htmlFor="username">
                    Name:
                    <Input
                        className="login-input"
                        id="username"
                        type="text"
                        name="username"
                        onChange={inputChange}
                        value={formState.username}
                    />
                </Label>
                <Label className='login-label' htmlFor="password">
                    Password:
                    <Input
                        className="login-input"
                        id="password"
                        type="text"
                        name="password"
                        onChange={inputChange}
                        value={formState.password}
                    />
                </Label>
                <Button className={'login-button'}>Login</Button>
            </Form>
            {error ? <p style={{ color: 'red' }}>{error}</p> : null}


        </>
    )
}
export default connect(null, {loginStatus})(Login);