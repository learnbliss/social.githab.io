const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching,
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload.isProgress ?
                    [...state.followingInProgress, action.payload.userId]
                    : [state.followingInProgress.filter(userId => {
                        return userId !== action.payload.userId
                    })]
                // false 7964 [7964]
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
};

export const setTotalCountAC = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: {
            totalCount
        }
    }
};

export const toggleIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching,
        }
    }
};

export const followingInProgressAC = (isProgress, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isProgress,
            userId,
        }
    }
};

