import * as React from 'react';
import { IKeyEvent } from '../types';

interface IProps{
    keyEvent: IKeyEvent[];
    userSelectsEvent: (id: number) => void;
}

// key events component that maps over the key event data and adds the functionality to update store with
// the selected id and scrolls to the selected div.

const component: React.SFC<IProps> = (props) => {
    return <div className="key-event-container">
                {props.keyEvent.map((item: IKeyEvent, index: number) => <a onClick={() => {
                    props.userSelectsEvent(item.linkedId)
                    }}
                    href={`/#item_${item.linkedId}`}
                    key={index}>
                    <div className="key-event-item">
                        <span className="item-time">{item.time}</span>
                        <span className="item-text">{item.event}</span>
                    </div>
                    <br/>
                </a>)}
            </div>;
}

export default component;