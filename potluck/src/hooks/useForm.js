import { useState, useEffect } from 'react';
import * as yup from 'yup';


const useForm = (initialState, schema) => {
    const [state, setState] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    const [disabled, setDisabled] = useState(true);

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setErrors({
                ...errors,
                [name]: ''
            }))
            .catch(err => setErrors({
                ...errors,
                [name]: err.errors[0]
            }))
    }

    const handleChange = e => {
        const { name, value, checked, type } = e.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        validate(name, valueToUse);
        setState({
            ...state,
            [name]: valueToUse
        })
    }

    useEffect(() => {
        schema.isValid(state).then(valid => setDisabled(!valid))
    }, [state]);

    return [ state, errors, disabled, handleChange ]
};

export default useForm;