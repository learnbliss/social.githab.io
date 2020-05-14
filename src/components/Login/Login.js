import React from 'react';
import styles from './Login.module.scss'
import LoginForm from "./LoginForm/LoginForm";
import {Redirect} from "react-router-dom";

const Login = props => {

    const onSubmit = (formData) => {
        console.log('formData: ', formData);
        const {email, password, rememberMe} = formData;
        props.loginThunk(email, password, rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={styles.auth}>
            <h1>Enter site:</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;