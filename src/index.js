import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireTree = () => {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
};
rerenderEntireTree(store.getState());
store.subscribe(() => {
    rerenderEntireTree()
});

serviceWorker.unregister();
