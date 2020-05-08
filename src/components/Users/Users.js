import React from 'react';
import styles from './users.module.scss'

const Users = props => {
    console.log('props.users: ', props.users);
    return (
        <div className={styles.root}>
            {props.users.map((user) => {
                console.log('user: ', user);
                return (
                    <div key={user.id} className={styles.wrapper}>
                        <div className={styles.avatar}>
                            <div><img
                                src={user.photoUrl}
                                alt='avatar'/>
                            </div>
                            {user.followed ?
                                <button onClick={() => {props.unfollow(user.id)}}>Fallow</button>
                                : <button onClick={() => {props.follow(user.id)}}>Unfallow</button>
                            }
                        </div>
                        <div className={styles.descriptionUser}>
                            <div className={styles.name}>
                                <div>{user.name}</div>
                                <div className={styles.status}>{user.status}</div>
                            </div>
                            <div className={styles.country}>
                                <div>{user.location.country},</div>
                                <div>{user.location.city}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Users;