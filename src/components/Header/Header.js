import React from 'react';
import logo from '../../logo.svg';
import styles from './Header.module.scss'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <NavLink to={'/'}><img src={logo} alt='logo'/></NavLink>
            {props.isFetching && <Preloader/>}
            <div className={styles.loginBlock}>
                {props.isAuth ?
                    <div>
                        <span className={styles.enter}>Вы вошли как:</span>
                        {` ${props.login} `}
                        <button onClick={props.logoutThunk}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;