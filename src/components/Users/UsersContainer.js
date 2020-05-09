import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../reducers/UsersReducer";
import React from "react";
import Axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(): void {
        if (this.props.users.length === 0) {
            Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCount(response.data.totalCount);
                });
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            });
    };

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        console: console.log(state),
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);