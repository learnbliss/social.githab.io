import {connect} from 'react-redux';
import {
    followThunk,
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    // getPortionSize,
    getTotalUsersCountSelector,
    getUsersSelector,
    getUsersThunk,
    unfollowThunk
} from '../../reducers/UsersReducer';
import React from 'react';
import Users from './Users';
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
            <Users totalItemsCount={this.props.totalItemsCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
                   portionSize={this.props.portionSize}/>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.userPage.users,
//         pageSize: state.userPage.pageSize,
//         totalItemsCount: state.userPage.totalItemsCount,
//         currentPage: state.userPage.currentPage,
//         isFetching: state.userPage.isFetching,
//         followingInProgress: state.userPage.followingInProgress,
//     }
// };

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalItemsCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
        // portionSize: getPortionSize(state),
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