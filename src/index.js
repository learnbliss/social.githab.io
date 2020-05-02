import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

const posts = [
    {message: 'My post 1', likeCounts: '3'},
    {message: 'My secondary post', likeCounts: '5'},
    {message: 'My third post', likeCounts: '25'},
];

const dialogs = [
    {id: '1', name: 'Andre'},
    {id: '2', name: 'Dimka'},
    {id: '3', name: 'Nikolay'},
    {id: '4', name: 'Arseniy'},
];

const messages = [
    {message: 'Привет как дела'},
    {message: 'У меня нормич'},
    {message: 'А у тебя?'},
    {message: 'все по феншую'},
];

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
