import React from 'react';
import styles from './Login.module.scss'
import {LoginReduxForm} from "./LoginForm/LoginForm";

const Login = props => {

    const onSubmit = (formData) => {
        console.log('formData: ', formData);
    };

    return (
        <div className={styles.auth}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;