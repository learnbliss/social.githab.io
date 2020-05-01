import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

export default App;
