import React from 'react';
import styles from './MyPosts.module.scss'
import PostItem from "./PostItem/PostItem";

const MyPosts = () => {

    const posts = [
        {message: 'My post 1', likeCounts: '3'},
        {message: 'My secondary post', likeCounts: '5'},
        {message: 'My third post', likeCounts: '25'},
    ];

    return (
        <div className={styles.post}>
            <h3>my post</h3>
            <div>
                <textarea/>
            </div>
            <div>
                <button>add post</button>
            </div>
            {posts.map((item) => {
                return (
                    <PostItem key={item.message} message={item.message} likeCounts={item.likeCounts}/>
                )
            })}
        </div>
    );
};

export default MyPosts;