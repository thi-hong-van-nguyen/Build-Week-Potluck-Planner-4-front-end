import * as yup from "yup"

export default yup.object().shape({
    food: yup.string().required()
})