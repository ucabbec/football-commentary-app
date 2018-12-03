import * as React from 'react';
import { withStore } from '../containers';

const component: React.SFC<{}> = () => {
    return <div>
                Commentary
            </div>;
}

export default withStore(component);