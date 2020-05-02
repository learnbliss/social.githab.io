import React from 'react';
import styles from './MyPosts.module.scss'
import PostItem from "./PostItem/PostItem";

const MyPosts = (props) => {
    const {posts} = props;
    const textAreaRef = React.createRef();
    const addPost = () => {
        console.log('new post: ', textAreaRef.current.value)
    }
    return (
        <div className={styles.post}>
            <h3>my post</h3>
            <div>
                <textarea ref={textAreaRef}/>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
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