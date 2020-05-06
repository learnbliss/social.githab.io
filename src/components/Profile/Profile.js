import React from 'react';
import styles from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    const {store} = props;
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostContainer store={store}/>
        </div>
    );
};

export default Profile;