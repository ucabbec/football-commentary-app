import { Dispatch } from 'redux';
import { Store } from '../store';
import { connect } from 'react-redux';
import { Action, userSelectsEvent } from '../actions';

const mapStateToProps = (state: Store.All) => ({
        layout: state.layout
    });

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    userSelectsEvent: (id: number) => {
        dispatch(userSelectsEvent(id))
    }
});

// HOC to pass down redux store and functions to dispatch actions

export const withStore = (wrappedComponent: React.SFC) => connect(
    mapStateToProps,
    mapDispatchToProps
)(wrappedComponent);