import React, {Suspense} from 'react';
import './App.scss';
import NavBar from "./components/NavBar/Navbar";
import {Route} from "react-router-dom";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import LoginContainer from "./components/Login/LoginContainer";
import HiApp from "./components/HiApp/HiApp";
import {withSuspens} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

const App = (props) => {
    return (
        <div className="App">
            <HeaderContainer/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route exact path='/' render={() => {
                    return <HiApp/>
                }}/>
                <Route path='/dialogs' render={withSuspens(DialogsContainer)}/>
                <Route path='/profile/:id?' render={withSuspens(ProfileContainer)}/>
                <Route path='/users' render={withSuspens(UsersContainer)}/>
                <Route path='/news' render={withSuspens(News)}/>
                <Route path='/music' render={withSuspens(Music)}/>
                <Route path='/settings' render={withSuspens(Settings)}/>
                <Route path='/login' render={withSuspens(LoginContainer)}/>
            </div>
        </div>
    );
};

export default App;
