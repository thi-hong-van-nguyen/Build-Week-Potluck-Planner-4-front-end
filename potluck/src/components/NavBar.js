import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function NavBar(props) {
    const { isLogin } = props
    const username = localStorage.getItem('username')
    return (
        <div className='navbar-container'>
            <div></div>
            <div>
                <ul className='nav-links'>
                    <li><Link to='/'>Home</Link></li>
                    {
                        isLogin ? <>
                            <li style={{color: '#ae2012', fontSize: '1rem'}}>
                                Welcome 
                                <span style={{textDecoration: 'underline'}}>
                                    {username}
                                </span>
                            </li>
                            <li><Link to='/logout'>Log out</Link></li>
                            <li><Link to='/potlucks'>View Potlucks</Link></li>
                            <li><Link to='/add'>Create Potluck</Link></li>
                        </> : <>
                            <li><Link to='/signup'>Sign up</Link></li>
                            <li><Link to='/login'>Log in</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({isLogin: state.login.isLogin});

export default connect(mapStateToProps)(NavBar)