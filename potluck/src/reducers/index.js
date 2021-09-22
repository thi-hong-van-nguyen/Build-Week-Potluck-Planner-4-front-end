import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { potluckReducer } from "./potluckReducer";


export default combineReducers({
    login: loginReducer,
    potlucks: potluckReducer
})