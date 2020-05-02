import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
    const {posts,} = props.stateFork.profilePage;
    const {messages, dialogs,} = props.stateFork.messagesPage;
    return (
        <div className="App">
            <Header/>
            <NavBar dialogs={dialogs}/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => {
                    return <Dialogs dialogs={dialogs} messages={messages}/>
                }}/>
                <Route path='/profile' render={() => {
                    return <Profile posts={posts}/>
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
