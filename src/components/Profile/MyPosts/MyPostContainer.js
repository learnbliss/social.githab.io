import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, pushDataToStateProFileAC} from "../../../reduxFork/profileReducer";
import ContextStore from "../../../ContextStore";

const MyPostContainer = () => {
    return (
        <ContextStore.Consumer>
            {(store) => {
                const pushDataToStatePost = (text) => {
                    store.dispatch(pushDataToStateProFileAC(text))
                };
                const addPost = () => {
                    store.dispatch(addPostAC())
                };
                return (
                    <MyPosts pushDataToStatePost={pushDataToStatePost} addPost={addPost}
                             posts={store.getState().profilePage.posts}
                             textArea={store.getState().profilePage.textArea}/>
                )
            }}
        </ContextStore.Consumer>
    );
};

export default MyPostContainer;