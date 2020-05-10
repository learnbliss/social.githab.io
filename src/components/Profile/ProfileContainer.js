import React, {Component} from 'react';
import Axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../reducers/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount(): void {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.id || 2}`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
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