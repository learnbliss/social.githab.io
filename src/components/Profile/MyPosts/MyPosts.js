import React from 'react';
import styles from './MyPosts.module.scss'
import PostItem from "./PostItem/PostItem";

const MyPosts = () => {
    return (
        <div className={styles.post}>
            my post
            <textarea/>
            <button>add post</button>
            <PostItem/>
            <PostItem/>
        </div>
    );
};

export default MyPosts;