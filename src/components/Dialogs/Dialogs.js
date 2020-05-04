import React from 'react';
import styles from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
    const {dialogs, messages, textArea, dispatch,} = props;
    const textAreaRef = React.createRef();
    const pushDataToStateDialog = () => {
        dispatch({
            type: 'PUSH_DATA_TO_STATE_DIALOG',
            payload: {
                textAreaValue: textAreaRef.current.value,
            },
        })
    };
    const addMessage = () => {
        if (textArea) {
            dispatch({
                type: 'ADD_MESSAGE_DIALOG',
            })
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
                <textarea ref={textAreaRef} value={textArea} onChange={pushDataToStateDialog}/>
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