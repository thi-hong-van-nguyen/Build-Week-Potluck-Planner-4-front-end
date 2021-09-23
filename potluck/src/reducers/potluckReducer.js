import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS, ADD_POTLUCK, ADD_GUESTS, ADD_FOODS } from "../actions";

const initialState = {
    isLoading: false,
    potlucks: [],
    errors: '',
    potluckPayload: {}
}

export const potluckReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POTLUCK:
            return ({
                ...state,
                potluckPayload: { 
                    ...state.potluckPayload, 
                    ...action.payload 
                }
            })
        case ADD_GUESTS:
            return ({
                ...state,
                potluckPayload: { 
                    ...state.potluckPayload, 
                    guests: action.payload 
                }
            })
        case ADD_FOODS:
            return ({
                ...state,
                potluckPayload: { 
                    ...state.potluckPayload, 
                    foods: action.payload 
                }
            })
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

