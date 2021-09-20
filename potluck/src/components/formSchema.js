import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Username is required!')
    .min(3, 'Username  must be 3 characters long!'),
    password: yup
    .string()
    .trim()
    .min(5, 'Password  must be 5 characters long!'),
    event: yup
    .string()
    .trim()
    .min(5, 'event  must be 5 characters long!'),
    description: yup
    .string()
    .trim()
    .min(5, 'There must be a description!'),
})

export default formSchema;