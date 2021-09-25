import React from 'react'
import { StyledInput, StyledLabel } from '../../styles/loginStyle'

export default function Input(props) {
    const { name, formState, handleChange } = props
    const label = name.toUpperCase().replace("_", " ") 
    let type
    switch(name) {
        case "date":
            type = "date"
            break
        case "password":
            type = "password"
            break
        case "time":
            type = "time"
            break
        default: 
            type = "text"
    }
    return (
        <StyledLabel htmlFor={name}>
            {label}:
            <StyledInput
                id={name}
                name={name}
                placeholder={name.replace("_", " ")}
                value={formState[name]}
                type={type}
                onChange={handleChange}
            />
        </StyledLabel>
    )
}
