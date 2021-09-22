import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Logout() {
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .post('/api/logout')
            .then(res => {
                localStorage.removeItem('token')
                push('/')
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div></div>
    )
}
