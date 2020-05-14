import React from 'react';
import styles from './MyPosts.module.scss'
import PostItem from './PostItem/PostItem';
import PostForm from "./PostForm/PostForm";

const MyPosts = (props) => {
    const {posts} = props;

    const addPost = (post) => {
        console.log('post add');
        props.addPost(post.post)
    };
    return (
        <div className={styles.post}>
            <h3>my post</h3>
            <PostForm onSubmit={addPost}/>
            {posts.map((item) => {
                return (
                    <PostItem key={item.id} message={item.message} likeCounts={item.likeCounts}/>
                )
            })}
        </div>
    );
};

export default MyPosts;