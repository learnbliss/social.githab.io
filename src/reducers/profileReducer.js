import {profileAPI} from "../api/api";

// action constants
const prefix = 'PROFILE_';

const ADD_POST_PROFILE = `${prefix}ADD_POST_PROFILE`;
const SET_USER_PROFILE = `${prefix}SET_USER_PROFILE`;
const SET_USER_STATUS = `${prefix}SET_USER_STATUS`;
const DELETE_POST_PROFILE = `${prefix}DELETE_POST_PROFILE`;

let initialState = {
    posts: [
        {id: 1, message: 'My post 1', likeCounts: '3'},
        {id: 2, message: 'My secondary post', likeCounts: '5'},
        {id: 3, message: 'My third post', likeCounts: '25'},
    ],
    textArea: '',
    profile: null,
    status: 'Ваш статус',
};

//reducer

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST_PROFILE:
            let newPost = {
                id: state.posts.length + 1,
                message: action.payload.post,
                likeCounts: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload.profile,
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.payload.status
            };
        case DELETE_POST_PROFILE:
            return {
                ...state,
                posts: state.posts.filter(post => {
                    return post.id !== action.payload.postId
                })
            };
        default:
            return state
    }
};

//action creator

export const addPostAC = (post) => {
    return {
        type: ADD_POST_PROFILE,
        payload: {
            post,
        }

    }
};

export const deletePostAC = (postId) => {
    return {
        type: DELETE_POST_PROFILE,
        payload: {
            postId,
        },
    }
};

export const setUserProfileAC = (profile) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile,
        }
    }
};

export const setUserStatusAC = (status) => {
    return {
        type: SET_USER_STATUS,
        payload: {
            status,
        },
    }
};

//middleware

// export const getUserProfileThunk = (profileId) => {
//     return (dispatch) => {
//         profileAPI.getProfile(profileId).then(data => {
//             dispatch(setUserProfileAC(data))
//         })
//     }
// };
export const getUserProfileThunk = (profileId) => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(profileId);
        dispatch(setUserProfileAC(data))
    }
};

// export const getStatusThunk = (userId) => {
//     return (dispatch) => {
//         profileAPI.getStatus(userId).then(data => {
//             if (data) {
//                 dispatch(setUserStatusAC(data))
//             }
//         })
//     }
// };
export const getStatusThunk = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(userId);
        if (data) {
            dispatch(setUserStatusAC(data))
        }
    }
};

// export const updateStatusThunk = (status) => {
//     return (dispatch) => {
//         profileAPI.updateStatus(status).then(data => {
//             if (data.resultCode === 0) {
//                 dispatch(setUserStatusAC(status));
//             }
//         })
//     }
// };
export const updateStatusThunk = (status) => {
    return async (dispatch) => {
        const data = profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setUserStatusAC(status));
        }
    }
};

export default profileReducer;