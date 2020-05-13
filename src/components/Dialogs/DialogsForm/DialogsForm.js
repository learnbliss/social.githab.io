import React from 'react';
import styles from './DialogsForm.module.scss'
import {Field, reduxForm} from "redux-form";

const DialogsForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <Field component="textarea" name="message"/> {/*value={textArea} onChange={pushDialog}*/}
            <button onClick={props.addMessage} style={{justifySelf: 'start'}}>add post</button>
        </form>
    );
};

export default reduxForm({
    form: 'dialogs'
})(DialogsForm);