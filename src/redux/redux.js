import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messagesReducer from "../reducers/messagesReducer";
import profileReducer from "../reducers/profileReducer";
import UsersReducer from "../reducers/UsersReducer";
import authReducer from "../reducers/authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    userPage: UsersReducer,
    auth: authReducer,
});

// const store = createStore(
//    reducers, {},
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);

export default store;