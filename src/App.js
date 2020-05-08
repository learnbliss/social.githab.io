import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => {
                    return <DialogsContainer/>
                }}/>
                <Route path='/profile' render={() => {
                    return <Profile/>
                }}/>
                <Route path='/users' render={() => {
                    return <UsersContainer/>
                }}/>
                <Route path='/news' render={() => {
                    return <News/>
                }}/>
                <Route path='/music' render={() => {
                    return <Music/>
                }}/>
                <Route path='/settings' render={() => {
                    return <Settings/>
                }}/>
            </div>

        </div>
    );
}

export default App;
