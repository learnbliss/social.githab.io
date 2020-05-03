import React from 'react';
import styles from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
    const {dialogs, messages, textArea, addMessage, pushDataToStateDialog} = props;
    const textAreaRef = React.createRef();
    const pushDataToStateDialogLocal = () => {
        pushDataToStateDialog(textAreaRef.current.value)
    };
    const addMessageLocal = () => {
        if (textArea) {
            addMessage()
        }
    };

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
                <textarea ref={textAreaRef} value={textArea} onChange={pushDataToStateDialogLocal}/>
                <button onClick={addMessageLocal} style={{justifySelf: 'start'}}>add post</button>
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