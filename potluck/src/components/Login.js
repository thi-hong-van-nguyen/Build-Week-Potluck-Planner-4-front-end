import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'


const initialFormState = {
    username: "",
    password: "",
};

const Login = () => {
    const { push } = useHistory()
    const [formState, setFormState] = useState(initialFormState);
    const [error, setError] = useState('')
    const inputChange = e => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });

    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('url', formState)      // we neeed to enter actual ural here form back end 
            .then(response => {
                console.log(response)
                localStorage.setItem('token',/** whatever is in the response */)
                push(/*push to whatever page we wwant to go most likey protected page*/)

            })
            .catch(err => {
                setError('there is a propblem with the server please try again')
            })

    }

    return (
        <>
            <form onSubmit={handleLogin} className='login-form' >

                <label className='login-label' htmlFor="username">
                    Name:
                    <input className="login-input"
                        id="username"
                        type="text"
                        name="username"
                        onChange={inputChange}
                        value={formState.username}
                    />
                </label>
                <label className='login-label' htmlFor="password">
                    Password:
                    <input className="login-input"
                        id="password"
                        type="text"
                        name="password"
                        onChange={inputChange}
                        value={formState.password}
                    />
                </label>


                <button className={'login-button'}>Login</button>
            </form>
            {error ? <p style={{ color: 'red' }}>{error}</p> : null}


        </>
    )
}
export default Login