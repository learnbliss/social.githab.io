import React from 'react';
import styles from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;