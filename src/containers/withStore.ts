import { Dispatch } from 'redux';
import { Store } from '../store';
import { connect } from 'react-redux';
import { Action } from '../actions';

const mapStateToProps = (state: Store.All) => ({
    layout: state.layout
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    userSelectsEvent: (id: string) => console.log(id)
});

// HOC to pass down redux store and functions to dispatch actions

export const withStore = (wrappedComponent: React.SFC) => connect(
    mapStateToProps,
    mapDispatchToProps
)(wrappedComponent);