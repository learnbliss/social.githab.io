import React from 'react';
import styles from './users.module.scss'
import Axios from "axios";
import defaultAvatar from '../../assets/img/UT8o1ZTXytaXXagOFbXf.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(): void {
        if (this.props.users.length === 0) {
            Axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    this.props.setUsers(response.data.items)
                });
        }
    }

    render() {
        return (
            <div className={styles.root}>
                {/*{this.props.users.length === 0 ? <button onClick={this.getUsers}>get users</button> : null}*/}
                {this.props.users.map((user) => {
                    return (
                        <div key={user.id} className={styles.wrapper}>
                            <div className={styles.avatar}>
                                <div><img
                                    src={user.photos.small !== null ? user.photos.small : defaultAvatar}
                                    alt='avatar'/>
                                </div>
                                {user.followed ?
                                    <button onClick={() => {
                                        this.props.unfollow(user.id)
                                    }}>Follow</button>
                                    : <button onClick={() => {
                                        this.props.follow(user.id)
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
    }
}

export default Users;