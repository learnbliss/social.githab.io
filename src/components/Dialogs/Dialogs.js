import React from 'react';
import styles from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
    const {dialogs, messages,} = props;
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogs.map((item) => {
                    return (
                        <DialogItem key={item.id} id={item.id} name={item.name} avatar={item.avatar}/>
                    )
                })}
            </div>
            <div className={styles.messageItems}>
                {messages.map((item) => {
                    return (
                        <Message key={item.message} message={item.message}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Dialogs;