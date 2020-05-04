import React from 'react';
import styles from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const {posts, dispatch, textArea} = props;
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={posts} dispatch={dispatch} textArea={textArea}/>
        </div>
    );
};

export default Profile;