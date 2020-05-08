import React from 'react';
import styles from './users.module.scss'

const Users = props => {
    console.log('props.users: ', props.users);

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPBW4o_EkS5nn0Mt2boxcKStnHhw68XW17uL8qC4Fp61QL4xAp&usqp=CAU',
                    name: 'Ivan P',
                    status: 'ivan-durak',
                    followed: false,
                    location: {country: 'Belarus', city: 'Minks'},
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLCMHxa7MfSl3vH9hQDDgUwFpORGANIRLpP2t8Pax3IqljrYHZ&usqp=CAU',
                    name: 'Arseniy G',
                    status: 'secondary',
                    followed: true,
                    location: {country: 'Russia', city: 'Moscow'},
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtYsA5m3xp8EdW0R1vT5Oein32vpgXbFZ6NkB23lbuDxjZwedh&usqp=CAU',
                    name: 'Leonid Q',
                    status: 'third',
                    followed: false,
                    location: {country: 'Russia', city: 'Kaliningrad'},
                }
            ]
        );
    }

    return (
        <div className={styles.root}>
            {props.users.map((user) => {
                return (
                    <div key={user.id} className={styles.wrapper}>
                        <div className={styles.avatar}>
                            <div><img
                                src={user.photoUrl}
                                alt='avatar'/>
                            </div>
                            {user.followed ?
                                <button onClick={() => {props.unfollow(user.id)}}>Follow</button>
                                : <button onClick={() => {props.follow(user.id)}}>Unfollow</button>
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