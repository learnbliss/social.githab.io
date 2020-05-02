import React from 'react';
import styles from './MyPosts.module.scss'
import PostItem from "./PostItem/PostItem";

const MyPosts = (props) => {
    const {posts} = props;
    return (
        <div className={styles.post}>
            <h3>my post</h3>
            <div>
                <textarea/>
            </div>
            <div>
                <button>add post</button>
            </div>
            {console.log('props.posts: ', props.posts)}
            {posts.map((item) => {
                return (
                    <PostItem key={item.message} message={item.message} likeCounts={item.likeCounts}/>
                )
            })}
        </div>
    );
};

export default MyPosts;