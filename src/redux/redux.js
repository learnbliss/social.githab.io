import {combineReducers, createStore} from "redux";
import messagesReducer from "../reduxFork/messagesReducer";
import profileReducer from "../reduxFork/profileReducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
});

let store = createStore(reducers);

export default store;