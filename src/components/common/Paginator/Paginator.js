import React from 'react';
import styles from "./Paginator.module.scss";

const Paginator = (props) => {
    const {totalUsersCount, pageSize, currentPage, onPageChanged} = props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    const getPages = () => {
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return pages
    };
    return (
        <div className={styles.pagButtons}>
            {getPages().map((page) => {
                return <span key={page}
                             className={currentPage === page ? styles.selectedPage : ''}
                             onClick={() => {
                                 onPageChanged(page)
                             }}>{page}</span>
            })}
        </div>
    );
};

export default Paginator;