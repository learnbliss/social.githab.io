import React from 'react';
import './App.scss';
import NavBar from "./components/NavBar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <div className="App">
            <HeaderContainer/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => {
                    return <DialogsContainer/>
                }}/>
                <Route path='/profile/:id?' render={() => {
                    return <ProfileContainer/>
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
