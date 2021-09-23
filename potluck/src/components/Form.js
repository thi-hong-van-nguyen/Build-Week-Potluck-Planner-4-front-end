import React from 'react'
import Input from './Input'
import Error from "./Error"
import useForm from "../hooks/useForm"
import { StyledForm, StyledButton } from './style/loginStyle'

export default function Form(props) {
    const { initialState, schema, submit } = props
    const [formState, errors, disabled, handleChange] = useForm(initialState, schema)

    const onSubmit = e => {
        e.preventDefault()
        submit(formState)
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            {
                Object.keys(formState).map(value => 
                    <Input 
                        name={value}
                        formState={formState}
                        handleChange={handleChange}
                    />
                )
            }
            {
                Object.keys(errors).map(err => 
                    <Error 
                        errorType={err}
                        error={errors[err]}
                    />
                )
            }
            <StyledButton
                disabled={disabled} 
                type="submit"
            >Submit</StyledButton>
        </StyledForm>
    )
}
