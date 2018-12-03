import * as React from 'react';

import Commentary from './commentary';
import KeyEvents from './keyEvents';


import { withStore, withMatchCommentary } from '../containers';
import { ICommentary, IKeyEvent } from '../types';

interface IProps{
    commentary: ICommentary[];
    keyEvents: IKeyEvent[];
    userSelectsEvent: (id: number) => void;
    layout:{
        selectedEvent?: number;
    } ;
}

const component: React.SFC<IProps> = (props) => {
    return <>
        <h2 className="title">Arsenal 4 - 2 Tottenham</h2><div className="container">
            <Commentary layout={props.layout} commentary={props.commentary} />
            <KeyEvents userSelectsEvent={props.userSelectsEvent} keyEvent={props.keyEvents} />
        </div>
    </>;
}

export default withMatchCommentary(withStore(component));