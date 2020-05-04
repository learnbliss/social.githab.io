import React from 'react';
import styles from './MyPosts.module.scss'
import PostItem from "./PostItem/PostItem";
import {addPostAC, pushDataToStateProFileAC} from "../../../reduxFork/profileReducer";

const MyPosts = (props) => {
    const {posts, dispatch, textArea} = props;
    const textAreaRef = React.createRef();
    const pushDataToState = () => {
        dispatch(pushDataToStateProFileAC(textAreaRef))
    };
    const addPost = () => {
        if (textArea) {
            dispatch(addPostAC())
        }
    };
    return (
        <div className={styles.post}>
            <h3>my post</h3>
            <div>
                <textarea ref={textAreaRef} value={textArea} onChange={pushDataToState}/>
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