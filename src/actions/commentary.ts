type ActionPayload<T> = { payload : T } 

export type CommentaryAction = ({ type: 'EVENT_SELECTED' } & ActionPayload<any>);

// Action to update the store with a users selection
export const userSelectsEvent = ( eventID: number ): CommentaryAction => ({
    type: 'EVENT_SELECTED',
    payload: eventID
});