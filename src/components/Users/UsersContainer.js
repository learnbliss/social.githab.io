import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../reducers/UsersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        followed: state.userPage.followed,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer