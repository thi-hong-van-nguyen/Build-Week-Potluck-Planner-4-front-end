import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Form, Label, Input, Button } from './style/loginStyle';

const initialFormState = {
    username: "",
    password: "",
};

const Login = () => {
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
            .post('/api/users/login', formState)// we neeed to enter actual ural here form back end
            .then(res => {
                localStorage.setItem('token',/** whatever is in the response */)
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
export default Login