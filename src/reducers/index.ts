import { combineReducers } from 'redux';
import { reducer as commentaryReducer } from './commentaryReducer'; 

const rootReducer = combineReducers({
	commentary: commentaryReducer
});

export default rootReducer;