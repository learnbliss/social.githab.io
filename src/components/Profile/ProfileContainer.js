import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, getUserProfileThunk, updateStatusThunk} from "../../reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount(): void {
        let userId = this.props.match.params.id;
        if (!this.props.match.params.id) {
            userId = this.props.authUserId
        }
        this.props.getUserProfileThunk(userId);
        this.props.getStatusThunk(userId)
        // API.getProfile(this.props.match.params.id).then(data => {
        //     this.props.setUserProfileAC(data)
        // })
    }

    render() {
        return (
            <Profile {...this.props} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.id,
    }
};

export default compose(
    connect(mapStateToProps, {
        getUserProfileThunk,
        getStatusThunk,
        updateStatusThunk,
    }),
    withRouter,
    // widthAuthRedirect,
)(ProfileContainer)

// export default widthAuthRedirect(withRouter(connect(mapStateToProps, {
//     getUserProfileThunk,
// })(ProfileContainer)));