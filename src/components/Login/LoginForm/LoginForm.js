import React from 'react';
import styles from './LoginForm.module.scss'
import {Field, reduxForm} from "redux-form";
import {CustomInput} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const LoginForm = props => {

    const maxlength15 = maxLengthCreator(15);

    return (
        <form className={styles.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field component={CustomInput}
                       name="login"
                       validate={[required]}
                       type="text" placeholder="login"/>
            </div>
            <div>
                <Field component={CustomInput}
                       name="password"
                       validate={[required]}
                       type="text" placeholder="password"/>
            </div>
            <div>
                <Field component={CustomInput}
                       name="rememberMe"
                       // validate={[required, maxlength15]}
                       type="checkbox"/> Запомнить меня
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