import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS  = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const LOG_IN = "LOG_IN";

const fetchStart = () => ({ type: FETCH_START });
const fetchSuccess = data => ({ type: FETCH_SUCCESS, payload: data });
const fetchFailure = error => ({ type: FETCH_FAILURE, payload: error });

export const ADD_POTLUCK = "ADD_POTLUCK";
export const ADD_GUESTS = "ADD_GUESTS";
export const ADD_FOODS = "ADD_FOODS";

export const addPotluck = potluck => ({ type: ADD_POTLUCK, payload: potluck })
export const addGuests = guests => ({ type: ADD_GUESTS, payload: guests })
export const addFoods = foods => ({ type: ADD_FOODS, payload: foods })

export const postPotluck = finalPotluck => dispatch => {
    dispatch(fetchStart())
    axiosWithAuth().post("/api/potlucks", finalPotluck)
        .then(potluck => {
            console.log(potluck)
        }).catch(err => {
        })
}

export const getPotlucks = () => dispatch => {
    dispatch(fetchStart());
    axiosWithAuth()
        .get('/api/potlucks')
        .then(res => {
            // dispatch(fetchSuccess(res.data))
            console.log(res)
        })
        .catch(err => {
            dispatch(fetchFailure("Cannot fetch potlucks"))
            console.log(err)
        })
};

export const loginStatus = (status) => ({ type: LOG_IN, payload: status});

