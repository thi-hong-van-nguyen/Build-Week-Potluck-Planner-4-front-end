import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import Guest from './Guest'

export default function PotluckDetails() {
    const { potluck_id } = useParams()
    const [potluck, setPotluck] = useState()

    useEffect(() => {
        axiosWithAuth().get(`/api/potlucks/${potluck_id}`)
            .then(res => {
                setPotluck(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [potluck_id])

    if (!potluck) return null

    const { potluck_name, date, location, time, foods, guests } = potluck

    return (
        <div>
            <div>Potluck name: {potluck_name}</div>
            <div>Date: {date}</div>
            <div>Time: {time}</div>
            <div>Location: {location}</div>
            <div>Foods: </div>
            <ul>
                {
                    foods?.map(f => <li>{f}</li>)
                }
            </ul>
            <div>Guests: </div>
            <ul>
                {
                    guests?.map(g => <Guest guest={g}/>)
                }
            </ul>
        </div>
    )
}
