import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import navigationReducer from './navigationReducer';
import eventReducer from './eventReducer';

export default combineReducers({
    navigationReducer,
    eventReducer,
    form: formReducer
});
