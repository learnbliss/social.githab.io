import React from 'react';
import contentHeadImg from "../../../assets/img/Sapa-terraces.jpg";
import styles from './ProfileInfo.module.scss'

const ProfileInfo = props => {
    return (
        <div>
            <div>
                <img src={contentHeadImg} alt={'logo'}/>
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;