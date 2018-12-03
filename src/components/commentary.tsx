import * as React from 'react';
import { ICommentary } from '../types';

interface IProps{
    commentary: ICommentary[];
}

const component: React.SFC<IProps> = (props) => {
    console.log(props);
    return <div className="commentary-container">
                {props.commentary.map((item: ICommentary, index: number) => <div key={index} >
                    <div className="commentary-item">
                        <span className="item-time">{item.time}</span>
                        <span className="item-text">{item.text}</span>
                    </div>
                </div>)}
            </div>;
}

export default component;