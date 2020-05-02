import React from 'react';
import styles from './SideBar.module.scss'

const SideBar = props => {
    const {dialogs} = props;

    // const dialogsData =

    return (
        <div className={styles.sideBarWrapper}>
            {dialogs.slice(0, 3).map((item) => {
                return (
                    <div key={item.id} className={styles.sideBar}>
                        <img src={item.avatar} alt='avatar'/>
                        <div>{item.name}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default SideBar;