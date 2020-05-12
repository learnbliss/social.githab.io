import React from 'react';
import styles from "./LoginForm.module.scss";
import {Field, reduxForm} from "redux-form";

const LoginForm = props => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'}
                       type="login"
                       component={'input'}
                       name={'login'}/>
            </div>
            <div>
                <Field placeholder={'password'}
                       type="password"
                       component={'input'}
                       name={'password'}/>
            </div>
            <div>
                <Field type="checkbox"
                       component={'input'}
                       name={'rememberMe'}/><span>remember me</span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);