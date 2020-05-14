import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {loginThunk} from "../../reducers/authReducer";

const LoginContainer = props => {
    return (
        <Login {...props}/>
    );
};

export default connect((state) => {
        return {
            isAuth: state.auth.isAuth,
            error: state.auth.error,
        }
    }, {
        loginThunk,
    }
)(LoginContainer);