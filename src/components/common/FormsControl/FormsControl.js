import React from "react";
import styles from './FormsControl.module.scss'

export const TextArea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            <textarea {...input} {...props}/>
            {hasError &&
            <div>
                <span>{meta.error}</span>
            </div>}
        </div>
    )
};

export const CustomInput = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            <input {...input} {...props}/>
            {hasError &&
            <div>
                <span>{meta.error}</span>
            </div>}
        </div>
    )
};