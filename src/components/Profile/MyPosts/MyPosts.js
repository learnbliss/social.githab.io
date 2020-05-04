import React from 'react';
import styles from './MyPosts.module.scss'
import PostItem from "./PostItem/PostItem";

const MyPosts = (props) => {
    const {posts, dispatch, textArea} = props;
    const textAreaRef = React.createRef();
    const pushDataToState = () => {
        dispatch({
            type: 'PUSH_DATA_TO_STATE_PROFILE',
            payload: {
                textAreaValue: textAreaRef.current.value,
            },
        })
    };
    const addPost = () => {
        if (textArea) {
            dispatch({
                type: 'ADD_POST_PROFILE',

            })
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