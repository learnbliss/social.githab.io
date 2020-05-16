import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const prefix = 'AUTH_';

const SET_AUTH_USER_DATA = `${prefix}SET_AUTH_USER_DATA`;
const FETCH_DATA = `${prefix}FETCH_DATA`;

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isFetching: false,
            };
        case FETCH_DATA:
            return {
                ...state,
                isFetching: action.payload.isFetching,
            };
        default:
            return state
    }
}

export const setAuthUserDataAC = (id, email, login, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            id, email, login, isAuth,
        }
    }
};

export const isFetchingTrueAC = (boolean) => {
    return {
        type: FETCH_DATA,
        payload: {
            isFetching: boolean
        }
    }
};

// export const authMeThunk = () => {
//     return (dispatch, getState) => {
//         dispatch(isFetchingTrueAC(true));
//         return authAPI.authMe().then(data => {
//             if (data.resultCode === 0) {
//                 const {id, email, login} = data.data;
//                 dispatch(setAuthUserDataAC(id, email, login, true,))
//             }
//         });
//     }
// };

export const authMeThunk = () => {
    return async (dispatch) => {
        dispatch(isFetchingTrueAC(true));
        const data = await authAPI.authMe();
        if (data.resultCode === 0) {
            const {id, email, login} = data.data;
            dispatch(setAuthUserDataAC(id, email, login, true,))
        }
        return data;
    }
};

// export const loginThunk = (email, password, rememberMe) => {
//     return (dispatch, getState) => {
//         authAPI.loginMe(email, password, rememberMe, true).then(data => {
//             if (data.resultCode === 0) {
//                 dispatch(authMeThunk())
//             } else {
//                 let messageError = data.messages.length > 0 ? data.messages[0] : 'Some error';
//                 dispatch(stopSubmit('login', {
//                     _error: messageError,
//                 }))
//             }
//         })
//     }
// };

export const loginThunk = (email, password, rememberMe) => {
    return async (dispatch) => {
        const data = await authAPI.loginMe(email, password, rememberMe, true);
        if (data.resultCode === 0) {
            dispatch(authMeThunk())
        } else {
            let messageError = data.messages.length > 0 ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {
                _error: messageError,
            }))
        }
    }
};

// export const logoutThunk = () => {
//     return (dispatch, getState) => {
//         authAPI.logoutMe().then(data => {
//             if (data.resultCode === 0) {
//                 dispatch(setAuthUserDataAC(null, null, null, false))
//             }
//         })
//     }
// };

export const logoutThunk = () => {
    return async (dispatch) => {
        const data = await authAPI.logoutMe();
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    }
};