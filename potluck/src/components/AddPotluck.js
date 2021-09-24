import React from 'react';
import { useHistory } from 'react-router-dom';
import schema from '../validations/PotluckSchema';
import Form from "./Form"
import { connect } from "react-redux"
import { addPotluck } from '../actions';


const initialState = {
    potluck_name: '',
    date: '',
    time: '',
    location: '',
};

function AddPotluck(props) {
    const { addPotluck } = props
    const { push } = useHistory();

    const submit = (state) => {
        const newPotluck = {
            potluck_name: state.potluck_name.trim(),
            date: state.date.trim(),
            time: state.time.trim(),
            location: state.location.trim(),
        };
        addPotluck(newPotluck)
        push("/add_guests")
    }

    return (
        <div className='create-potluck'>
            <div>
                <h1>Create a Potluck!</h1>
                <p>This is the perfect place to create your potluck event!</p>
            </div>
            <Form
                initialState={initialState}
                submit={submit}
                schema={schema}
            />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vL4PW-dCxSrzSn0FZJtRurqf6QH8Gh2jag&usqp=CAU" alt="people around table eating" />
        </div>
    )
}

export default connect(null, { addPotluck })(AddPotluck)