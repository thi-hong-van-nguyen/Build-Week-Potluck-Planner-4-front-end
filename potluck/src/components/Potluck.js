import React from 'react';
import { Link } from "react-router-dom"

export default function Potluck(props) {
    const { potluck_name, date, time, location, potluck_id } = props.potluck;
    return (
        <div>
            <div>Potluck name: {potluck_name}</div>
            <div>Date: {date}</div>
            <div>Time: {time}</div>
            <div>Location: {location}</div>
            <Link to={`/potlucks/${potluck_id}`}>More Details</Link>
        </div>
    )
}

