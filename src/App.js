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
import LoginContainer from "./components/Login/LoginContainer";
import HiApp from "./components/HiApp/HiApp";

const App = (props) => {
    return (
        <div className="App">
            <HeaderContainer/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route exact path='/' render={() => {
                    return <HiApp/>
                }}/>
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
                <Route path='/login' render={() => {
                    return <LoginContainer/>
                }}/>
            </div>
        </div>
    );
};

export default App;
