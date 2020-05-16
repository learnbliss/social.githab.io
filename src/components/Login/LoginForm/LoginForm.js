import React from 'react';
import styles from './LoginForm.module.scss'
import {Field, reduxForm} from "redux-form";
import {CustomInput} from "../../common/FormsControl/FormsControl";
import {required} from "../../../utils/validators/validators";

const LoginForm = props => {
    const {handleSubmit, error} = props;
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div>
                <Field component={CustomInput}
                       name="email"
                       validate={[required]}
                       type="text" placeholder="email"/>
            </div>
            <div>
                <Field component={CustomInput}
                       name="password"
                       validate={[required]}
                       type="password" placeholder="password"/>
            </div>
            <div>
                <Field component={CustomInput}
                       name="rememberMe"
                       type="checkbox"/> Запомнить меня
            </div>
            {error && (
                <div className={styles.formSummaryError}>
                    {error}
                </div>
            )}
            <div>
                <button>Login me now!</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'login'
})(LoginForm);