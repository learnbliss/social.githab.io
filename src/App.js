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
    // const {addPost, pushDataToState, addMessage, pushDataToStateDialog} = props;
    // const {posts,} = props.stateFork.profilePage;
    // const {messages, dialogs,} = props.stateFork.messagesPage;
    const {store} = props;
    return (
        <div className="App">
            <Header/>
            <NavBar dialogs={store.stateFork.messagesPage.dialogs}/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => {
                    return <Dialogs
                        dialogs={store.stateFork.messagesPage.dialogs}
                        messages={store.stateFork.messagesPage.messages}
                        textArea={store.stateFork.messagesPage.textArea}
                        addMessage={store.addMessage}
                        pushDataToStateDialog={store.pushDataToStateDialog()}
                    />
                }}/>
                <Route path='/profile' render={() => {
                    return <Profile
                        posts={store.stateFork.profilePage.posts}
                        addPost={store.addPost}
                        pushDataToState={store.pushDataToState()}
                        textArea={store.stateFork.profilePage.textArea}/>
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
