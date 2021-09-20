import React from 'react';

export default function AddPotluck(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className='potluck' onSubmit={onSubmit}>
            <div className='create-potluck'>
                <h2>Create a Potluck!</h2>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.event}</div>
                    <div>{errors.description}</div>
                </div>
            </div>
            <div>
                <h3>Type Your Name</h3>
                <label>Name
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />    
                </label>
                <h3>Name Your Event</h3>
                <label>Event
                    <input
                        value={values.event}
                        onChange={onChange}
                        name='event'
                        type='text'
                    />    
                </label>
                <h3>Give A Description</h3>
                <label>Event Description
                    <input
                        value={values.description}
                        onChange={onChange}
                        name='description'
                        type='text'
                    />    
                </label>
            </div>
            <button className='button' disabled={disabled}>Submit</button>
        </form>
    )
}