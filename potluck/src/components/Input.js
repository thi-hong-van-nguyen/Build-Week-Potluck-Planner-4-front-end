import React from 'react'
import { StyledInput, StyledLabel } from './style/loginStyle'

export default function Input(props) {
    const { name, formState, handleChange } = props
    const label = name.toUpperCase().replace("_", " ") 
    return (
        <StyledLabel htmlFor={name}>
            {label}:
            <StyledInput
                id={name}
                name={name}
                placeholder={name.replace("_", " ")}
                value={formState[name]}
                type={name === "password" ? "password" : "text"}
                onChange={handleChange}
            />
        </StyledLabel>
    )
}
