import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './helpers/Routes';

export default function NavBar() {
    // const username = localStorage.getItem('username');

    return (
        <header className='navbar-container'>
            <nav>
                <ul className='nav-links'>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <Routes/>
                </ul>
            </nav>
        </header>
    )
}