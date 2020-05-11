import React from 'react';
import styles from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";

const Dialogs = props => {
    const {dialogs, messages, textArea} = props;
    const pushDialog = (e) => {
        props.pushDataToStateDialog(e.target.value)
    };
    const addMessage = () => {
        if (textArea) {
            props.addMessage()
        }
    };

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

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
                <textarea value={textArea} onChange={pushDialog}/>
                <button onClick={addMessage} style={{justifySelf: 'start'}}>add post</button>
                {messages.map((item) => {
                    return (
                        <Message key={item.id} message={item.message}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Dialogs;