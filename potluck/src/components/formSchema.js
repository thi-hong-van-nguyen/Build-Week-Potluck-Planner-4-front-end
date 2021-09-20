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
    .required('Password is required!')
    .min(5, 'Password  must be 5 characters long!'),

})

export default formSchema;