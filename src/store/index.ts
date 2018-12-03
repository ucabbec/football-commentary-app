import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export namespace Store {
    export type Layout = {
        selectedEvent?: number
    }

    export type All = {
        layout: Layout
    }
}

const configureStore = () => createStore(rootReducer, applyMiddleware());

export default configureStore;
