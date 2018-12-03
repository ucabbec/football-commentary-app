import * as React from 'react';
import { IKeyEvent } from '../types';

interface IProps{
    keyEvent: IKeyEvent[];
}

const component: React.SFC<IProps> = (props) => {
    console.log(props);
    return <div className="key-event-container">
                {props.keyEvent.map((item: IKeyEvent, index: number) => <div key={index}>
                    <div className="key-event-item">
                        <span className="item-time">{item.time}</span>
                        <span className="item-text">{item.event}</span>
                    </div>
                    <br/>
                </div>)}
            </div>;
}

export default component;