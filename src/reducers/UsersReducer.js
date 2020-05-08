const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    // countUsersInPage: 4,
    users: []
};

export default function UsersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.userId) {
                        return {...user, followed: true,}
                    }
                    return user
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.userId) {
                        return {...user, followed: false,}
                    }
                    return user
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload.users],
            };
        default:
            return state
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        payload: {
            userId,
        },
    }
};

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId,
        },
    }
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        payload: {
            users,
        },
    }
};

