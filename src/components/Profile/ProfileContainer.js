import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, getUserProfileThunk} from "../../reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {widthAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount(): void {
        this.props.getUserProfileThunk(this.props.match.params.id);
        // this.props.getStatusThunk(this.props.profile.userId)
        // API.getProfile(this.props.match.params.id).then(data => {
        //     this.props.setUserProfileAC(data)
        // })
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
};

export default compose(
    connect(mapStateToProps, {
        getUserProfileThunk,
        getStatusThunk,
    }),
    withRouter,
    // widthAuthRedirect,
)(ProfileContainer)

// export default widthAuthRedirect(withRouter(connect(mapStateToProps, {
//     getUserProfileThunk,
// })(ProfileContainer)));