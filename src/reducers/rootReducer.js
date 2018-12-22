import {combineReducers} from 'redux';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({statusReducer})

export default rootReducer;