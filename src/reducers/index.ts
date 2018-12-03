import { combineReducers } from 'redux';
import { reducer as layoutReducer } from './commentaryReducer'; 

const rootReducer = combineReducers({
	layout: layoutReducer
});

export default rootReducer;