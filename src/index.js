import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, pushDataToState, pushDataToStateDialog} from "./reduxFork/stateFork";
import './index.css';
import stateFork, {subscribe} from "./reduxFork/stateFork";
import * as serviceWorker from './serviceWorker';

const reRenderThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    stateFork={state}
                    addPost={addPost}
                    pushDataToState={pushDataToState}
                    addMessage={addMessage}
                    pushDataToStateDialog={pushDataToStateDialog}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

reRenderThree(stateFork);

subscribe(reRenderThree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
