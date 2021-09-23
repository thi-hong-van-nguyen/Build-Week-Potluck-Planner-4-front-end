import React, { useState } from 'react'
import { useDebounce } from "use-debounce-coolhatguy"
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function Guests() {
    const [guests, setGuests] = useState([])
    const [selectedGuests, setSelectedGuests] = useState([])
    const [guest, setGuest] = useState("")
    const [err, setErr] = useState("")

    useDebounce(() => {
        axiosWithAuth().get(`/api/users/${guest}`)
            .then(res => {
                setSelectedGuests(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, 1000, [guest])

    const submit = () => {
        if (selectedGuests.some(g => g === guest)) {
            setGuests([...guests, guest])
            setErr("")
            setGuest("")
        } else {
            setErr("guest username does not have account")
        }
    }

    const handleChange = e => {
        setGuest(e.target.value)
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
            {err}
            <form onSubmit={submit}>
                <label htmlFor="guest">
                    Guests
                    <input
                        id="guest"
                        value={guest}
                        type="text"
                        name="guest"
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">
                    Add Guest
                </button>
            </form>
        </div>
    )
}
