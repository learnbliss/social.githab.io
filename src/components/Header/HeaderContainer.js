import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {isFetchingTrueAC, setAuthUserDataAC} from "../../reducers/authReducer";
import Axios from "axios";

class HeaderContainer extends Component {

    componentDidMount(): void {
        this.props.isFetchingTrueAC(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    this.props.setAuthUserDataAC(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
    }
};

export default connect(mapStateToProps, {
    setAuthUserDataAC,
    isFetchingTrueAC,
})(HeaderContainer);