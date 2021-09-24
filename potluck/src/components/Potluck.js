import React from 'react';
import { Link } from "react-router-dom"

export default function Potluck(props) {
    const { potluck_name, date, time, location, potluck_id } = props.potluck;
    return (
        <div className='potluck-card'>
            <div className='potluck-name'>Potluck name: <span>{potluck_name}</span></div>
            <div>Date: {date.slice(0, 10)}</div>
            <div>Time: {time}</div>
            <div>Location: {location}</div>
            <Link to={`/potlucks/${potluck_id}`}>More Details</Link>
        </div>
    )
}

