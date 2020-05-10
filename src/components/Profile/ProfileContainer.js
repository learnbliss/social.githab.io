import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../reducers/profileReducer";
import {withRouter} from "react-router-dom";
import API from "../../api/api";

class ProfileContainer extends Component {

    componentDidMount(): void {
            API.getProfile(this.props.match.params.id).then(data => {
                this.props.setUserProfileAC(data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

export default withRouter(connect(mapStateToProps, {
    setUserProfileAC,
})(ProfileContainer));