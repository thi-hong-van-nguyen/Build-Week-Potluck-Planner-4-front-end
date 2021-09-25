import React from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

export default function Guest(props) {
    const { guest } = props
    const { username: name, food, accepted, guest_id } = guest
    const username = localStorage.getItem("username")

    const handleClick = () => {
        axiosWithAuth().put(`/api/guests/${guest_id}`, { ...guest, accepted: !accepted })
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <li style={{ color: accepted ? "green" : "red" }}>
            <h2>
                Name: {name}
            </h2>
            {
                food && 
                    <h2>
                        Food: {food}
                    </h2>
            }
            {
                username === name && 
                    <button onClick={handleClick}>
                        {accepted ? "refuse?" : "accept?"}
                    </button>
            }
        </li>
    )
}
