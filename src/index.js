import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./reduxFork/stateFork";
import './index.css';
import * as serviceWorker from './serviceWorker';

const reRenderThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

reRenderThree(store.stateFork);

store.subscribe(reRenderThree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
