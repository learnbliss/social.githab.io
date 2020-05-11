import {combineReducers, createStore} from "redux";
import messagesReducer from "../reducers/messagesReducer";
import profileReducer from "../reducers/profileReducer";
import UsersReducer from "../reducers/UsersReducer";
import authReducer from "../reducers/authReducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    userPage: UsersReducer,
    auth: authReducer,
});

const store = createStore(
   reducers, {},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export default store;