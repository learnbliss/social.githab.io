const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

const initialState = {
    // countUsersInPage: 4,
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
                users: action.payload.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage,
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.payload.totalCount,
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

export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    }
}

export const setTotalCountAC = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: {
            totalCount
        }
    }
};

