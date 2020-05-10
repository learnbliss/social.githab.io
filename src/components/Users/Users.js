import React from 'react';
import styles from './users.module.scss';
import defaultAvatar from '../../assets/img/UT8o1ZTXytaXXagOFbXf.jpg';
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import Axios from "axios";

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
                                    <button onClick={() => {

                                        Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": '3dec519a-9ed9-4d00-a8c6-4541a128800e',
                                            }
                                        })
                                            .then((response) => {
                                                console.log('response: ', response);
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(user.id)
                                                }
                                            });

                                    }}>Follow</button>
                                    : <button onClick={() => {

                                        Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": '3dec519a-9ed9-4d00-a8c6-4541a128800e',
                                            }
                                        })
                                            .then((response) => {
                                                console.log('response: ', response);
                                                if (response.data.resultCode === 0) {
                                                    props.follow(user.id)
                                                }
                                            });

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