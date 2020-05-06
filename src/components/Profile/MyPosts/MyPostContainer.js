import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, pushDataToStateProFileAC} from "../../../reduxFork/profileReducer";

const MyPostContainer = (props) => {
    const {store} = props;
    const pushDataToStatePost = (text) => {
        store.dispatch(pushDataToStateProFileAC(text))
    };
    const addPost = () => {
        store.dispatch(addPostAC())
    };
    return (
        <MyPosts pushDataToStatePost={pushDataToStatePost} addPost={addPost} posts={store.getState().profilePage.posts} textArea={store.getState().profilePage.textArea}/>
    );
};

export default MyPostContainer;