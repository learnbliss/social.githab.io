import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {isFetchingTrueAC, setAuthUserDataAC} from "../../reducers/authReducer";
import API from "../../api/api";

class HeaderContainer extends Component {

    componentDidMount(): void {
        this.props.isFetchingTrueAC(true);
            API.authMe().then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
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