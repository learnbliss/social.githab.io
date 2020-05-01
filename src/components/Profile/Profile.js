import React from 'react';
import contentHeadImg from "../../img/Sapa-terraces.jpg";
import styles from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src={contentHeadImg} alt={'logo'}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;