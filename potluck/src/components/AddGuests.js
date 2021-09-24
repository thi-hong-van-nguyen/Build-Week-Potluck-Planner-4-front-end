import React, { useState } from 'react'
import axios from 'axios'
import Form from './Form'
import GuestSchema from '../validations/GuestSchema'
import { Link, useHistory } from 'react-router-dom'
import { connect } from "react-redux"
import { addGuests } from "../actions"

const initialState = {
    guest: ""
}

function AddGuests(props) {
    const { addGuests } = props
    const [guests, setGuests] = useState([])
    const [err, setErr] = useState("")
    const { goBack } = useHistory()

    const submit = ({ guest }) => {
        axios.get(`https://potluck-planner-3.herokuapp.com/api/users/${guest}`)
            .then(res => {
                console.log(res.data)
                if (res.data.some(g =>
                    g === guest.trim()
                )) {
                    setGuests([...guests, guest.trim()])
                    setErr("")
                } else {
                    setErr("username does not exist")
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='guests-list-wrapper'>
            <div className='guests-list'>
                <h1>Guests List: </h1>
                <ul>
                    {
                        guests.map(guest =>
                            <li>{guest}</li>
                        )
                    }
                </ul>
            </div>
            <Form
                initialState={initialState}
                submit={submit}
                schema={GuestSchema}
            />
            {err}
            <div className='next-back'>
                <Link
                    onClick={() => addGuests(guests)}
                    className='next'
                    to="/add_foods"
                >
                    Next
                </Link>
                <button className='go-back' onClick={goBack}>Go Back</button>
            </div>
        </div>
    )
}


export default connect(null, { addGuests })(AddGuests)
