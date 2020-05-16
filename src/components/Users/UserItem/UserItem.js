import React from 'react';
import styles from "./UserItem.module.scss";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../../assets/img/UT8o1ZTXytaXXagOFbXf.jpg";

const UserItem = props => {
    const {user, followingInProgress, followThunk, unfollowThunk} = props;
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
                    <button disabled={followingInProgress.some(userId => {
                        return userId === user.id
                    })}
                            onClick={() => {
                                followThunk(user.id)
                                // followingInProgressAC(true, user.id);
                                // API.setUnfollow(user.id).then((data) => {
                                //     if (data.resultCode === 0) {
                                //         props.unfollow(user.id);
                                //     }
                                //     followingInProgressAC(false, user.id);
                                // });
                            }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(userId => {
                        return userId === user.id
                    })}
                              onClick={() => {
                                  unfollowThunk(user.id)
                                  // followingInProgressAC(true, user.id);
                                  // API.setFollow(user.id).then((data) => {
                                  //     if (data.resultCode === 0) {
                                  //         props.follow(user.id);
                                  //     }
                                  //     followingInProgressAC(false, user.id);
                                  // });
                              }}>Follow</button>
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
    );
};

export default UserItem;