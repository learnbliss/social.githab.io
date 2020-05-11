import API from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const FETCH_DATA = 'FETCH_DATA';

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
                ...action.payload.data,
                isAuth: true,
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

export const setAuthUserDataAC = (id, email, login) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            data: {id, email, login},
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
        API.authMe().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setAuthUserDataAC(id, email, login))
            }
        });
        dispatch(isFetchingTrueAC(false));
    }
};