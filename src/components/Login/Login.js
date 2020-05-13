import React from 'react';
import styles from './Login.module.scss'
import LoginForm from "./LoginForm/LoginForm";

const Login = props => {

    const onSubmit = (formData) => {
        console.log('formData: ', formData);
    };

    return (
        <div className={styles.auth}>
            <h1>Enter site:</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;