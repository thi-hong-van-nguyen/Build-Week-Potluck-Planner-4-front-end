import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS  = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const LOG_IN = "LOG_IN";

const fetchStart = () => ({ type: FETCH_START });
const fetchSuccess = data => ({ type: FETCH_SUCCESS, payload: data });
const fetchFailure = error => ({ type: FETCH_FAILURE, payload: error });

export const getPotlucks = () => dispatch => {
    dispatch(fetchStart());
    axiosWithAuth()
        .get('/api/potlucks') //waiting for back-end
        .then(res => {
            dispatch(fetchSuccess(res.data)) //wait for back-end
        })
        .catch(err => {
            dispatch(fetchFailure("Cannot fetch potlucks"))
        })
};

export const loginStatus = (status) => ({ type: LOG_IN, payload: status});

