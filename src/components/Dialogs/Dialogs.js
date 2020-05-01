import React from 'react';
import styles from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem id='1' name='Andre'/>
                <DialogItem id='2' name='Dimka'/>
                <DialogItem id='3' name='Nikolay'/>
                <DialogItem id='4' name='Arseniy'/>
            </div>
            <div className={styles.messageItems}>
                <Message message='Привет как дела'/>
                <Message message='У меня нормич'/>
                <Message message='А у тебя?'/>
                <Message message='все по феншую'/>
            </div>
        </div>
    );
};

export default Dialogs;