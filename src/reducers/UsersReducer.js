import {usersAPI} from "../api/api";
import {createSelector} from 'reselect'
import {updateObjectInArray} from "../utils/Helper/reducer-helper";

const prefix = 'USERS_';

const FOLLOW = `${prefix}FOLLOW`;
const UNFOLLOW = `${prefix}UNFOLLOW`;
const SET_USERS = `${prefix}SET_USERS`;
const SET_CURRENT_PAGE = `${prefix}SET_CURRENT_PAGE`;
const SET_TOTAL_COUNT = `${prefix}SET_TOTAL_COUNT`;
const TOGGLE_IS_FETCHING = `${prefix}TOGGLE_IS_FETCHING`;
const TOGGLE_IS_FOLLOWING_PROGRESS = `${prefix}TOGGLE_IS_FOLLOWING_PROGRESS`;

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
                users: updateObjectInArray(state.users, action.payload.userId, 'id', {followed: true})
                // users: state.users.map((user) => {
                //     if (user.id === action.payload.userId) {
                //         return {...user, followed: true,}
                //     }
                //     return user
                // })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userId, 'id', {followed: false})
                // users: state.users.map((user) => {
                //     if (user.id === action.payload.userId) {
                //         return {...user, followed: false,}
                //     }
                //     return user
                // })
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

//middleware

// export const getUsersThunk = (currentPage, pageSize) => {
//     return (dispatch, getState) => {
//         dispatch(toggleIsFetchingAC(true));
//         dispatch(setCurrentPageAC(currentPage));
//         usersAPI.getUsers(currentPage, pageSize).then((data) => {
//             dispatch(toggleIsFetchingAC(false));
//             dispatch(setUsersAC(data.items));
//             if (getState().userPage.totalUsersCount === 0) {
//                 dispatch(setTotalCountAC(data.totalCount));
//             }
//         });
//     }
// };
export const getUsersThunk = (currentPage, pageSize) => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFetchingAC(true));
        dispatch(setCurrentPageAC(currentPage));
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(data.items));
        if (getState().userPage.totalUsersCount === 0) {
            dispatch(setTotalCountAC(data.totalCount));
        }
    }
};

//double logical refactor
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(followingInProgressAC(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(followingInProgressAC(false, userId));
};

// export const followThunk = (userId) => {
//     return (dispatch) => {
//         dispatch(followingInProgressAC(true, userId));
//         usersAPI.setUnfollow(userId).then((data) => {
//             if (data.resultCode === 0) {
//                 dispatch(unfollowAC(userId));
//             }
//             dispatch(followingInProgressAC(false, userId));
//         });
//     }
// };
export const followThunk = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.setUnfollow.bind(usersAPI), unfollowAC);
    }
};

// export const unfollowThunk = (userId) => {
//     return (dispatch) => {
//         dispatch(followingInProgressAC(true, userId));
//         usersAPI.setFollow(userId).then((data) => {
//             if (data.resultCode === 0) {
//                 dispatch(followAC(userId));
//             }
//             dispatch(followingInProgressAC(false, userId));
//         });
//     }
// };
export const unfollowThunk = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.setFollow.bind(usersAPI), followAC);
    }
};

/**
 selectors
 **/

export const getUsersSelector = (state) => {
    return state.userPage.users
};

// reselect example ->>>>
const getUsers = (state) => {
    return state.userPage.users
};

export const getUsersSelectorDifficult = createSelector(getUsers, (users) => {
    users.filter(u => {
        return u
    })
});
// <<<<- reselect example

export const getPageSizeSelector = (state) => {
    return state.userPage.pageSize
};
export const getTotalUsersCountSelector = (state) => {
    return state.userPage.totalUsersCount
};
export const getCurrentPageSelector = (state) => {
    return state.userPage.currentPage
};
export const getIsFetchingSelector = (state) => {
    return state.userPage.isFetching
};
export const getFollowingInProgressSelector = (state) => {
    return state.userPage.followingInProgress
};
