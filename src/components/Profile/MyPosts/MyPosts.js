import React from 'react';
import styles from './MyPosts.module.scss'
import PostItem from "./PostItem/PostItem";

const MyPosts = (props) => {
    const {posts, addPost, pushDataToState, textArea} = props;
    const textAreaRef = React.createRef();
    const pushDataToStateLocal = () => {
        pushDataToState(textAreaRef.current.value);
    };
    const addPostLocal = () => {
        if (textArea) {
            addPost();
        }
    };
    return (
        <div className={styles.post}>
            <h3>my post</h3>
            <div>
                <textarea ref={textAreaRef} value={textArea} onChange={pushDataToStateLocal}/>
            </div>
            <div>
                <button onClick={addPostLocal}>add post</button>
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