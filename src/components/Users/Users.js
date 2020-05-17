import React from 'react';
import styles from './Users.module.scss';
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import UserItem from "./UserItem/UserItem";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
return (
        <div className={styles.root}>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
<div className={styles.wrap}>
                {props.isFetching ?
                    <Preloader/>
                    : props.users.map((user) => {
                        return (
                            <UserItem key={user.id}
                                      user={user}
                                      followingInProgress={props.followingInProgress}
                                      followThunk={props.followThunk}
                                      unfollowThunk={props.unfollowThunk}/>
                        )
                    })}
            </div>
        </div>
    );
};

export default Users;