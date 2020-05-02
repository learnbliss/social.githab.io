import React from 'react';
import styles from './MyPosts.module.scss'
import PostItem from "./PostItem/PostItem";

const MyPosts = () => {
    return (
        <div className={styles.post}>
            <h3>my post</h3>
            <div>
                <textarea/>
            </div>
            <div>
                <button>add post</button>
            </div>
            <PostItem message='My post 1' likeCounts='3'/>
            <PostItem message='My secondary post' likeCounts='5'/>
        </div>
    );
};

export default MyPosts;