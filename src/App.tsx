import './assets/styles/index.scss';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Main from './components';

const store = configureStore();

class App extends React.Component<{},{}> {
    render() {
        return <Provider store={store}>
                    <div>
                        <Main />
                    </div>
                </Provider>;
    }
};

render(<App />, document.getElementById('root'));
