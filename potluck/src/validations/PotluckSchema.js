import * as yup from 'yup';

const formSchema = yup.object().shape({
    potluck_name: yup
    .string()
    .trim()
    .required('Potluck name is required!')
    .min(3, 'Potluck name must be 3 characters long!'),
    date: yup
    .string()
    .trim()
    .min(4, 'Give me a date!'),
    time: yup
    .string()
    .trim()
    .min(3, 'Start time must be 3 characters long!'),
    location: yup
    .string()
    .trim()
    .min(4, 'What is the Location!'),
})

export default formSchema;