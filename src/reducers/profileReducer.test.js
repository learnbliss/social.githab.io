import profileReducer, {addPostAC, deletePostAC} from "./profileReducer";

let initialState = {
    posts: [
        {id: 1, message: 'My post 1', likeCounts: '3'},
        {id: 2, message: 'My secondary post', likeCounts: '5'},
        {id: 3, message: 'My third post', likeCounts: '25'},
    ],
};

test('length of post should be incremented', () => {
    let newState = profileReducer(initialState, addPostAC('text'));
    expect(newState.posts.length).toBe(4)
});

test('message of newPost should be correct', () => {
    let newState = profileReducer(initialState, addPostAC('text'));
    expect(newState.posts[newState.posts.length - 1].message).toBe('text')
});

test('after delete length arr should be decrement', () => {
    let newState = profileReducer(initialState, deletePostAC(1));
    expect(initialState.posts.length === (newState.posts.length + 1)).toBe(true)
});

test('after delete length arr should be decrement', () => {
    let newState = profileReducer(initialState, deletePostAC(1000));
    expect(initialState.posts.length === (newState.posts.length + 1)).toBe(true)
});

test(`after delete length arr should'n be decrement if id is incorrect`, () => {
    let newState = profileReducer(initialState, deletePostAC(1000));
    expect(initialState.posts.length === (newState.posts.length + 1)).toBe(false)
});