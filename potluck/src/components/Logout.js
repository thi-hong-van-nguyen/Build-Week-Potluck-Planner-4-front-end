import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginStatus } from '../actions';

function Logout(props) {
    const { push } = useHistory();

    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        props.loginStatus(false);
        push('/')
    }, []);

    return (
        <div></div>
    )
}

export default connect(null, {loginStatus})(Logout);