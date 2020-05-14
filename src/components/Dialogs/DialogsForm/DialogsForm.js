import React from 'react';
import styles from './DialogsForm.module.scss'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLenght50 = maxLengthCreator(50);

const DialogsForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <Field component={TextArea}
                   name="message"
            validate={[required, maxLenght50]}/>
            <button style={{justifySelf: 'start'}}>add post</button>
        </form>
    );
};

export default reduxForm({
    form: 'dialogs'
})(DialogsForm);