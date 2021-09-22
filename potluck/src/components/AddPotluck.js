import React from 'react';
import { useHistory } from 'react-router-dom';

import useForm from '../hooks/useForm';
import schema from '../validations/PotluckSchema';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialState = {
    potluck_name: '',
    date: '',
    time: '',
    location: '',
};

const initialErrors = {
    potluck_name: '',
    date: '',
    time: '',
    location: '',
};

const initialDisabled = true;

export default function AddPotluck() {
    const [ state, errors, disabled, handleChange ] = useForm(initialState, initialErrors, initialDisabled, schema)
    const { push } = useHistory();

    const submit = e => {
        e.preventDefault();
        const newPotluck = {
            potluck_name: state.potluck_name.trim(),
            date: state.date.trim(),
            time: state.time.trim(),
            location: state.location.trim(),
        };
        console.log(newPotluck)
        // axiosWithAuth()
        //     .post('/api/potlucks/', newPotluck)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => console.log(err))
    }

    return (
        <form className='potluck' onSubmit={submit}>
            <div>
                <h1>Create a Potluck!</h1>
                <p>This is the perfect place to create your potluck event!</p>
            </div>
            <div className='create-potluck'>
                <h3>Type Your Potluck Name.</h3>
                <label>
                    <input
                        value={state.potluck_name}
                        onChange={handleChange}
                        name='potluck_name'
                        type='text'
                    />
                </label>
                <div style={{ color: 'red', fontSize: '1rem' }}>{errors.potluck_name}</div>
                <h3>Name Your Event Date.</h3>
                <label>
                    <input
                        value={state.date}
                        onChange={handleChange}
                        name='date'
                        type='text'
                    />
                </label>
                <div style={{ color: 'red', fontSize: '1rem' }}>{errors.date}</div>
                <h3>What Time Will Your Potluck Begin?</h3>
                <label>
                    <input
                        value={state.time}
                        onChange={handleChange}
                        name='time'
                        type='text'
                    />
                </label>
                <div style={{ color: 'red', fontSize: '1rem' }}>{errors.time}</div>
                <h3>Where Will Your Potluck Take Place?</h3>
                <label>
                    <input
                        value={state.location}
                        onChange={handleChange}
                        name='location'
                        type='text'
                    />
                </label>
                <div style={{ color: 'red', fontSize: '1rem' }}>{errors.location}</div>
                <br />
                <button className='add-button' disabled={disabled}>Add Potluck</button>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vL4PW-dCxSrzSn0FZJtRurqf6QH8Gh2jag&usqp=CAU" alt="people around table eating" />
        </form>
    )
}