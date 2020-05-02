import React from 'react';
import styles from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={styles.dialogItem}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}><img src={props.avatar} alt="avatar"/>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;