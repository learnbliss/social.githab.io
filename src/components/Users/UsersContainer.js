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
import Axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(): void {
        this.props.toggleIsFetchingAC(true);
        if (this.props.users.length === 0) {
            Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.toggleIsFetchingAC(false);
                    this.props.setUsersAC(response.data.items);
                    this.props.setTotalCountAC(response.data.totalCount);
                });
        }
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetchingAC(true);
        this.props.setCurrentPageAC(page);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetchingAC(false);
                this.props.setUsersAC(response.data.items)
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
        console: console.log(state),
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