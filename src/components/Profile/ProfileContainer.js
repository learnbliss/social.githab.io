import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk} from "../../reducers/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount(): void {
            this.props.getUserProfileThunk(this.props.match.params.id)
            // API.getProfile(this.props.match.params.id).then(data => {
            //     this.props.setUserProfileAC(data)
            // })
    }

    render() {
        if (!this.props.isAuth) {
        return <Redirect to={'/login'}/>
    }
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
};

export default withRouter(connect(mapStateToProps, {
    getUserProfileThunk,
})(ProfileContainer));