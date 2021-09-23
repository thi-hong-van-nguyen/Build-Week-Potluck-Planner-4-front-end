import React from 'react'

export default function Error(props) {
    const { error, errorType } = props
    
    if (error.length === 0) return null
    return (
        <div className='errors'>
            <div style={{ color: 'red', fontSize: '1rem'}}>
                {errorType}: {error}
            </div>
        </div>
    )
}
