import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink(props) {
    const { route } = props
    return (
        <li>
            <Link to={`/${route}`}>
                {route.replace("_", " ")}
            </Link>
        </li>
    )
}
