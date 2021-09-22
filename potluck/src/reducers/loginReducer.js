import { LOG_IN } from "../actions";

const initialState = {
    isLogin: false
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return ({
                ...state,
                isLogin: action.payload
            })
        default:
            return state
    }
}