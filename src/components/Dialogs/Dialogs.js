import React from 'react';
import styles from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {compose} from "redux";
import DialogsForm from "./DialogsForm/DialogsForm";

const Dialogs = props => {
    const {dialogs, messages} = props;

    const addMessage = (message) => {
        props.addMessage(message.message)
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
                <DialogsForm onSubmit={addMessage}/>
                {/*<textarea value={textArea} onChange={pushDialog}/>*/}
                {/*<button onClick={addMessage} style={{justifySelf: 'start'}}>add post</button>*/}
                {messages.map((item) => {
                    return (
                        <Message key={item.id} message={item.message}/>
                    )
                })}
            </div>
        </div>
    );
};

export default compose(
    // widthAuthRedirect,
)(Dialogs);

// export default widthAuthRedirect(Dialogs);