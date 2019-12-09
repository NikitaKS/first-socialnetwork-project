import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/State";
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
