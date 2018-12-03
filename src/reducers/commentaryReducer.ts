import { Action } from '../actions';
import { Store } from '../store';

const initialState: Store.Layout = { 
	selectedEvent: 0
};

export const reducer = (state: Store.Layout = initialState, action: Action): Store.Layout => {
	console.log(state)
	switch(action.type){
		case "EVENT_SELECTED":
			return {
				...state,
				selectedEvent: action.payload
			};
		default:
			return state;
	}
}
