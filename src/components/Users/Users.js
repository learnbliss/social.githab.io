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
            Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCount(response.data.totalCount);
                });
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            });
    };


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

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
                                     className={this.props.currentPage === page ? styles.selectedPage : ''}
                                     onClick={() => {
                                         this.onPageChanged(page)
                                     }}>{page}</span>
                    })}
                    {/*<span>1</span>*/}
                    {/*<span className={styles.selectedPage}>2</span>*/}
                    {/*<span>3</span>*/}
                    {/*<span>4</span>*/}
                    {/*<span>5</span>*/}
                </div>
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