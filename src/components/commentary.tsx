import * as React from 'react';
import { ICommentary } from '../types';

interface IProps{
    commentary: ICommentary[];
    layout: {
        selectedEvent?: number;
    }
}

const component: React.SFC<IProps> = (props) => {
    return <div className="commentary-container">
                {props.commentary.map((item: ICommentary, index: number) => <div key={index} >
                    <div id={`item_${item.index}`} className={`commentary-item ${props.layout.selectedEvent === item.index ? 'selected-event' : ''}`}>
                        <span className="item-time">{item.time}</span>
                        <span className="item-text">{item.text}</span>
                    </div>
                </div>)}
            </div>;
}

export default component;