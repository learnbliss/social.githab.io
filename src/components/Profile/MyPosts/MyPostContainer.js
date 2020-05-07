// import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, pushDataToStateProFileAC} from "../../../reduxFork/profileReducer";
import {connect} from "react-redux";

// const MyPostContainer = () => {
//     return (
//         <ContextStore.Consumer>
//             {(store) => {
//                 const pushDataToStatePost = (text) => {
//                     store.dispatch(pushDataToStateProFileAC(text))
//                 };
//                 const addPost = () => {
//                     store.dispatch(addPostAC())
//                 };
//                 return (
//                     <MyPosts pushDataToStatePost={pushDataToStatePost} addPost={addPost}
//                              posts={store.getState().profilePage.posts}
//                              textArea={store.getState().profilePage.textArea}/>
//                 )
//             }}
//         </ContextStore.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        textArea: state.profilePage.textArea,
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        pushDataToStatePost: (text) => {
            dispatch(pushDataToStateProFileAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        },
    }
};

const MyPostContainer = connect(mapStateToProps, mapStateToDispatch)(MyPosts);

export default MyPostContainer;