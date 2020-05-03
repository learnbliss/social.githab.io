import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, pushDataToState, pushDataToStateDialog} from "./reduxFork/stateFork";
import './index.css';

const renderThree = (state) => {
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

export default renderThree;