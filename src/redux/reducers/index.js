import { combineReducers } from 'redux';
import { authReducer } from './login';
import {petsReducer} from './pets';

export default combineReducers({
    pets: petsReducer,
    auth: authReducer
})