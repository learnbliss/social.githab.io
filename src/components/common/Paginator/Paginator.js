import React, {useEffect, useState} from 'react';
import styles from "./Paginator.module.scss";

const Paginator = (props) => {
    const {totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10} = props;

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    const getPages = () => {
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return pages
    };

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [currentPortion, setCurrentPortion] = useState(1);
    const leftPortionSize = (currentPortion - 1) * portionSize + 1;
    const rightPortionSize = currentPortion * portionSize;

    const onLeftArrowClick = () => {
        setCurrentPortion(currentPortion - 1);
        onPageChanged(leftPortionSize - 1)
    };

    const onRightArrowClick = () => {
        setCurrentPortion(currentPortion + 1);
        onPageChanged(rightPortionSize + 1)
    };

    return (
        <div className={styles.pagButtons}>
            {currentPortion > 1 &&
            <span className={styles.arrow}
                  onClick={onLeftArrowClick}>&#60;&#60;</span>}
            {getPages()
                .filter(page => {
                    return page >= leftPortionSize && page <= rightPortionSize
                })
                .map((page) => {
                    return (
                        <span key={page}
                              className={`${styles.page} ${currentPage === page && styles.selectedPage}`}
                              onClick={() => {
                                  onPageChanged(page)
                              }}>{page}
                            </span>
                    )
                })}
            {portionCount > currentPortion &&
            <span className={styles.arrow}
                  onClick={onRightArrowClick}>&#62;&#62;</span>}
        </div>
    );
};

export default Paginator;