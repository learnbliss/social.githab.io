import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const FETCH_DATA = 'FETCH_DATA';
const LOGOUT = 'LOGOUT';
// const LOGIN = 'LOGIN';

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
        case LOGOUT:
            return {
                ...state,
                isAuth: action.payload.isAuth,
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

export const authMeThunk = () => {
    return (dispatch, getState) => {
        dispatch(isFetchingTrueAC(true));
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        });
        dispatch(isFetchingTrueAC(false));
    }
};

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch, getState) => {
        authAPI.loginMe(email, password, rememberMe, true).then(data => {
            console.log('email, password, rememberMe: ', email, password, rememberMe);
            if (data.resultCode === 0) {
                dispatch(authMeThunk())
            } else {
                console.error('error, resulCode = ', data.resultCode);
            }
        })
    }
};

export const logoutThunk = () => {
    return (dispatch, getState) => {
        authAPI.logoutMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
    }
};