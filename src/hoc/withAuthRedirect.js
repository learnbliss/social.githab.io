import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const widthAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return (
            <Component {...props}/>
        );
    };
    return connect((state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    }, null)(RedirectComponent);
};