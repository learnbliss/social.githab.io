import {connect} from 'react-redux';
import {followThunk, getUsersThunk, unfollowThunk} from '../../reducers/UsersReducer';
import React from 'react';
import Users from './Users';
import {widthAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(): void {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetchingAC(true);
        // if (this.props.users.length === 0) {
        //     API.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        //         this.props.toggleIsFetchingAC(false);
        //         this.props.setUsersAC(data.items);
        //         this.props.setTotalCountAC(data.totalCount);
        //     });
        // }
    }

    onPageChanged = (page) => {
        this.props.getUsersThunk(page, this.props.pageSize)
        // this.props.toggleIsFetchingAC(true);
        // this.props.setCurrentPageAC(page);
        // API.getUsers(page, this.props.pageSize).then((data) => {
        //     this.props.toggleIsFetchingAC(false);
        //     this.props.setUsersAC(data.items)
        // });
    };

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                // unfollow={this.props.unfollowAC}
                // follow={this.props.followAC}
                // isFetching={this.props.isFetching}
                // followingInProgressAC={this.props.followingInProgressAC}
                   followingInProgress={this.props.followingInProgress}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress,
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         followAC: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollowAC: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsersAC: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPageAC: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCountAC: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleIsFetchingAC: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// };

export default compose(
    connect(mapStateToProps,
        {
            getUsersThunk,
            followThunk,
            unfollowThunk,
        }
    ),
    // widthAuthRedirect,
)(UsersContainer)

// export default widthAuthRedirect(connect(mapStateToProps,
//     {
//         getUsersThunk,
//         followThunk,
//         unfollowThunk,
//     }
// )(UsersContainer));