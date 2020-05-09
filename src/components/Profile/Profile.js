import React from 'react';
import styles from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPostContainer';

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    );
};

export default Profile;