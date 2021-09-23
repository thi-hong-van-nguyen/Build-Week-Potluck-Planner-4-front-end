import * as yup from "yup"

export default yup.object().shape({
    guest: yup.string().required()
})