import {combineReducers, createStore} from "redux";
import messagesReducer from "../reducers/messagesReducer";
import profileReducer from "../reducers/profileReducer";
import UsersReducer from "../reducers/UsersReducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    userPage: UsersReducer,
});

let store = createStore(reducers);

export default store;