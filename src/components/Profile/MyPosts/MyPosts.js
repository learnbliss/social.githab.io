import React from 'react';
import styles from './MyPosts.module.scss'
import PostItem from "./PostItem/PostItem";

const MyPosts = () => {
    return (
        <div className={styles.post}>
            my post
            <textarea/>
            <button>add post</button>
            <PostItem message='My post 1' likeCounts='3'/>
            <PostItem message='My secondary post' likeCounts='5'/>
        </div>
    );
};

export default MyPosts;