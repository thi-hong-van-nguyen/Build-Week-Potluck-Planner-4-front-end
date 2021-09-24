import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
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
    const [selectedGuests, setSelectedGuests] = useState([])
    const { goBack } = useHistory()

    const submit = ({ guest }) => {
        axiosWithAuth().get(`/api/users/${guest}`)
            .then(res => {
                setSelectedGuests(res.data)
                if (selectedGuests.some(g => g === guest)) {
                    setGuests([...guests, guest])
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <ul>
                {
                    guests.map(guest =>
                        <li>{guest}</li>
                    )
                }
            </ul>
            <ol>
                {
                    selectedGuests.map(guest =>
                        <li>{guest}</li>
                    )
                }
            </ol>
            <Form
                initialState={initialState}
                submit={submit}
                schema={GuestSchema}
            />
            <Link
                onClick={() => addGuests(guests)}
                to="/add_foods"
            >
                Next
            </Link>
            <Link onClick={goBack}>Go Back</Link>
        </div>
    )
}


export default connect(null, { addGuests })(AddGuests)
