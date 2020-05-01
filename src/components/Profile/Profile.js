import React from 'react';
import contentHeadImg from "../../img/Sapa-terraces.jpg";
import styles from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src={contentHeadImg} alt={'logo'}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default Profile;