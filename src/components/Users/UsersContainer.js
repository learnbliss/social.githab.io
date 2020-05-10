import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from '../../reducers/UsersReducer';
import React from 'react';
import Users from './Users';
import API from "../../api/api";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(): void {
        this.props.toggleIsFetchingAC(true);
        if (this.props.users.length === 0) {
            API.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
                this.props.toggleIsFetchingAC(false);
                this.props.setUsersAC(data.items);
                this.props.setTotalCountAC(data.totalCount);
            });
        }
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetchingAC(true);
        this.props.setCurrentPageAC(page);
       API.getUsers(page, this.props.pageSize).then((data) => {
                this.props.toggleIsFetchingAC(false);
                this.props.setUsersAC(data.items)
            });
    };

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollowAC}
                   follow={this.props.followAC}
                   isFetching={this.props.isFetching}/>
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

export default connect(mapStateToProps,
    {
        followAC,
        unfollowAC,
        setUsersAC,
        setCurrentPageAC,
        setTotalCountAC,
        toggleIsFetchingAC,
    }
)(UsersContainer);