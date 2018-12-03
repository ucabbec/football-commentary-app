type ActionPayload<T> = { payload : T } 

export type MenuAction = ({ type: 'EVENT_SELECTED' } & ActionPayload<any>);

// Action to update the store with a users selection
export const userSelectsEvent = ( event: any ): MenuAction => ({
    type: 'EVENT_SELECTED',
    payload: event
});