import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import AppContainer from "./AppContainer";

// const reRenderThree = (state) => {
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
// };

// reRenderThree(store.getState());
//
// store.subscribe(() => {
//     reRenderThree(store.getState())
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
