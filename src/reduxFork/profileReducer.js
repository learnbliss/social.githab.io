const PUSH_DATA_TO_STATE_PROFILE = 'PUSH_DATA_TO_STATE_PROFILE';
const ADD_POST_PROFILE = 'ADD_POST_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'My post 1', likeCounts: '3'},
        {id: 2, message: 'My secondary post', likeCounts: '5'},
        {id: 3, message: 'My third post', likeCounts: '25'},
    ],
    textArea: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST_PROFILE:
            let newPost = {
                id: state.posts.length + 1,
                message: state.textArea,
                likeCounts: 0,
            };
            state.posts.push(newPost);
            state.textArea = '';
            return state;

        case PUSH_DATA_TO_STATE_PROFILE:
            state.textArea = action.payload.textAreaValue;
            return state;
        default:
            return state
    }
};

export const pushDataToStateProFileAC = (textAreaRef) => {
    return {
        type: PUSH_DATA_TO_STATE_PROFILE,
        payload: {
            textAreaValue: textAreaRef.current.value,
        },
    }
};

export const addPostAC = () => {
    return {
        type: ADD_POST_PROFILE,

    }
};

export default profileReducer;