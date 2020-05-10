import React, {Component} from 'react';
import Axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../reducers/profileReducer";

class ProfileContainer extends Component {

    componentDidMount(): void {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {
    setUserProfileAC,
})(ProfileContainer);