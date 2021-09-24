import React from 'react';

export default function Potluck(props) {
    const { potluck_name, date, time, location} = props.potluck;
    return (
        <div >
            <div>Potluck name: {potluck_name}</div>
            <div>Date: {date}</div>
            <div>Time: {time}</div>
            <div>Location: {location}</div>
        </div>
    )
}

