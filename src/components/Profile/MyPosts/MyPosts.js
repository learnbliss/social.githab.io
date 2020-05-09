import React from 'react';
import styles from './MyPosts.module.scss'
import PostItem from './PostItem/PostItem';

const MyPosts = (props) => {
    const {posts, textArea} = props;
    const pushPost = (e) => {
        props.pushDataToStatePost(e.target.value);
    };
    const addPost = () => {
        if (textArea) {
            props.addPost();
        }
    };
    return (
        <div className={styles.post}>
            <h3>my post</h3>
            <div>
                <textarea value={textArea} onChange={pushPost}/>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            {posts.map((item) => {
                return (
                    <PostItem key={item.id} message={item.message} likeCounts={item.likeCounts}/>
                )
            })}
        </div>
    );
};

export default MyPosts;