import React from 'react';
import styles from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {

    const dialogs = [
        {id: '1', name: 'Andre'},
        {id: '2', name: 'Dimka'},
        {id: '3', name: 'Nikolay'},
        {id: '4', name: 'Arseniy'},
    ];

    const messages = [
        {message: 'Привет как дела'},
        {message: 'У меня нормич'},
        {message: 'А у тебя?'},
        {message: 'все по феншую'},
    ];

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogs.map((item) => {
                    return (
                        <DialogItem key={item.id} id={item.id} name={item.name}/>
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