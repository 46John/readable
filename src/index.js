import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import middleware from './middleware';

ReactDOM.render(
    <Provider store={createStore(reducer, middleware)}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();