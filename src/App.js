import React from 'react';
import logo from './logo.svg';
import './App.scss';
import contentHeadImg from './img/Sapa-terraces.jpg'

function App() {
    return (
        <div className="App">
            <header className="header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <nav className='nav'>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
            <div className='content'>
                <div>
                    <img className={'contentHeadImg'} src={contentHeadImg} alt={'logo'}/>
                </div>
                <div>
                    ava + sesc
                </div>
                <div>
                    my post
                    <div>
                        new post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
