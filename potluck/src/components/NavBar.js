import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <div>
            <div>Logo</div>
            <div className='nav-links'>
                <ul>
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