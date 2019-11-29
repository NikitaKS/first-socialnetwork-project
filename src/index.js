import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./Redux/State";
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText} from './Redux/State';

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>, document.getElementById('root'));
};
rerenderEntireTree(state);
subscribe(rerenderEntireTree);

serviceWorker.unregister();
