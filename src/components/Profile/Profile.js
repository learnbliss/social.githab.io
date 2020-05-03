import React from 'react';
import styles from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const {posts, addPost, pushDataToState, textArea} = props;
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost} pushDataToState={pushDataToState} textArea={textArea}/>
        </div>
    );
};

export default Profile;