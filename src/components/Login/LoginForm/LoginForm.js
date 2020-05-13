import React from 'react';
import styles from './LoginForm.module.scss'
import {Field, reduxForm} from "redux-form";

const LoginForm = props => {
    return (
        <form className={styles.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="login" type="text" placeholder="login"/>
            </div>
            <div>
                <Field component="input" name="password" type="text" placeholder="password"/>
            </div>
            <div>
                <Field component="input" name="rememberMe" type="checkbox"/> Запомнить меня
            </div>
            <div>
                <button>Login me now!</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'login'
})(LoginForm);