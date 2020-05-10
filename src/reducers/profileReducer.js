const PUSH_DATA_TO_STATE_PROFILE = 'PUSH_DATA_TO_STATE_PROFILE';
const ADD_POST_PROFILE = 'ADD_POST_PROFILE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'My post 1', likeCounts: '3'},
        {id: 2, message: 'My secondary post', likeCounts: '5'},
        {id: 3, message: 'My third post', likeCounts: '25'},
    ],
    textArea: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST_PROFILE:
            let newPost = {
                id: state.posts.length + 1,
                message: state.textArea,
                likeCounts: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                textArea: '',
            };
        case PUSH_DATA_TO_STATE_PROFILE: {
            return {
                ...state,
                textArea: action.payload.textAreaValue,
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload.profile,
            };
        default:
            return state
    }
};

export const pushDataToStateProFileAC = (text) => {
    return {
        type: PUSH_DATA_TO_STATE_PROFILE,
        payload: {
            textAreaValue: text,
        },
    }
};

export const addPostAC = () => {
    return {
        type: ADD_POST_PROFILE,

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

export default profileReducer;