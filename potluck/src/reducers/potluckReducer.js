import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS } from "../actions";

const initialState = {
    isLoading: false,
    potlucks: [],
    errors: ''
}

export const potluckReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return ({
                ...state,
                isLoading: true,
                potlucks: [],
                errors: ''
            })
        case FETCH_SUCCESS:
            return ({
                ...state,
                isLoading: false,
                potlucks: action.payload,
                errors: ''
            })
        case FETCH_FAILURE:
            return ({
                ...state,
                isLoading: false,
                potlucks: [],
                errors: action.payload
            })
        default:
            return state
    }
}

