import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogData = [
    {name: 'Dima', id: 1},
    {name: 'Sveta', id: 2},
    {name: 'Nikita', id: 3},
    {name: 'Sergei', id: 4},
    {name: 'Ola', id: 5},
    {name: 'Lera', id: 6}
];
let messageData = [
    {message: 'Hi', id: 1},
    {message: 'Hi,How are u?', id: 2},
    {message: 'Good', id: 3},
    {message: 'Nie', id: 4},
    {message: 'React', id: 5},
    {message: 'Learn', id: 6}
];
let postData = [
    {id: 1, like: 11, message: 'How are u?'},
    {id: 2, like: 22, message: 'Its my first post'},
    {id: 3, like: 223, message: '123'},
];

ReactDOM.render(<App dialogData={dialogData} messageData={messageData} postData={postData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
