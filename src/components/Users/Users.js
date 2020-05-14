import React from 'react';
import styles from './users.module.scss';
import defaultAvatar from '../../assets/img/UT8o1ZTXytaXXagOFbXf.jpg';
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

const Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const getPages = () => {
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return pages
    };
    return (
        <div className={styles.root}>
            <div className={styles.pagButtons}>
                {getPages().map((page) => {
                    return <span key={page}
                                 className={props.currentPage === page ? styles.selectedPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(page)
                                 }}>{page}</span>
                })}
            </div>
            {props.isFetching ?
                <Preloader/>
                : props.users.map((user) => {
                    return (
                        <div key={user.id} className={styles.wrapper}>
                            <div className={styles.avatar}>
                                <div>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img
                                            src={user.photos.small !== null ? user.photos.small : defaultAvatar}
                                            alt='avatar'/>
                                    </NavLink>
                                </div>
                                {user.followed ?
                                    <button disabled={props.followingInProgress.some(userId => {
                                        return userId === user.id
                                    })}
                                            onClick={() => {
                                                props.followThunk(user.id)
                                                // props.followingInProgressAC(true, user.id);
                                                // API.setUnfollow(user.id).then((data) => {
                                                //     if (data.resultCode === 0) {
                                                //         props.unfollow(user.id);
                                                //     }
                                                //     props.followingInProgressAC(false, user.id);
                                                // });
                                            }}>Follow</button>
                                    : <button disabled={props.followingInProgress.some(userId => {
                                        return userId === user.id
                                    })}
                                              onClick={() => {
                                                  props.unfollowThunk(user.id)
                                                  // props.followingInProgressAC(true, user.id);
                                                  // API.setFollow(user.id).then((data) => {
                                                  //     if (data.resultCode === 0) {
                                                  //         props.follow(user.id);
                                                  //     }
                                                  //     props.followingInProgressAC(false, user.id);
                                                  // });
                                              }}>Unfollow</button>
                                }
                            </div>
                            <div className={styles.descriptionUser}>
                                <div className={styles.name}>
                                    <div>{user.name}</div>
                                    <div className={styles.status}>{user.status}</div>
                                </div>
                                <div className={styles.country}>
                                    <div>'user.location.country',</div>
                                    <div>'user.location.city'</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    );
};

export default Users;