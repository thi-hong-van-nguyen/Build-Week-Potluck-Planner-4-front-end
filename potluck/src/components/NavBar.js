import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <div className='navbar-container'>
            <div></div>
            <div>
                <ul className='nav-links'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/add'>Create Potluck</Link></li>
                    <li><Link to='/signup'>Sign up</Link></li>
                    <li><Link to='/login'>Log in</Link></li>
                    <li><Link to='/logout'>Log out</Link></li>
                </ul>
            </div>
        </div>
    )
}