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
    const {state, addMessage, pushDataToStateDialog, addPost, pushDataToState,} = props;
    return (
        <div className="App">
            <Header/>
            <NavBar dialogs={state.messagesPage.dialogs}/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => {
                    return <Dialogs
                        dialogs={state.messagesPage.dialogs}
                        messages={state.messagesPage.messages}
                        textArea={state.messagesPage.textArea}
                        addMessage={addMessage}
                        pushDataToStateDialog={pushDataToStateDialog}
                    />
                }}/>
                <Route path='/profile' render={() => {
                    return <Profile
                        posts={state.profilePage.posts}
                        addPost={addPost}
                        pushDataToState={pushDataToState}
                        textArea={state.profilePage.textArea}/>
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
