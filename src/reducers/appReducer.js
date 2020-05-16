import {authMeThunk} from "./authReducer";

const prefix = 'APP_';

const INITIALIZED_SUCCESS = `${prefix}INITIALIZED_SUCCESS`;

const initialState = {
    initialized: false,
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state
    }
}

export const initializedSuccessAC = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
};

export const initializedAppThunk = () => {
    return (dispatch) => {
        let promise = dispatch(authMeThunk());
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccessAC())
        })
    }
};