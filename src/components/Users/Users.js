import React from 'react';
import styles from "./users.module.scss";
import defaultAvatar from "../../assets/img/UT8o1ZTXytaXXagOFbXf.jpg";

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
            {props.users.map((user) => {
                return (
                    <div key={user.id} className={styles.wrapper}>
                        <div className={styles.avatar}>
                            <div><img
                                src={user.photos.small !== null ? user.photos.small : defaultAvatar}
                                alt='avatar'/>
                            </div>
                            {user.followed ?
                                <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
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