import { Action } from '../actions';
import { Store } from '../store';

const initialState: Store.Layout = { 
};

export const reducer = (state: Store.Layout = initialState , action: Action): Store.Layout => {
	switch(action.type){
		case "EVENT_SELECTED":
			return state;
		default:
			return state;
	}
}
