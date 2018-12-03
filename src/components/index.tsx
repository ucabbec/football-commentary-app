import * as React from 'react';

import Commentary from './commentary';
import KeyEvents from './keyEvents';


import { withStore, withMatchCommentary } from '../containers';
import { ICommentary, IKeyEvent } from '../types';

interface IProps{
    commentary: ICommentary[];
    keyEvents: IKeyEvent[];
}

const component: React.SFC<IProps> = (props) => {
    console.log(props);
    return <div className="container">
                <Commentary commentary={props.commentary} />
                <KeyEvents keyEvent={props.keyEvents} />
            </div>;
}

export default withMatchCommentary(withStore(component));