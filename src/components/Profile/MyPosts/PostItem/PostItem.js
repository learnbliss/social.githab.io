import React from 'react';
import styles from './PostItem.module.scss'

const PostItem = () => {
    return (
        <div className={styles.postItem}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWg5WVlh52LLDsOq81XQPJoAxo1bPvCv23piy62w88gebxx9vM&usqp=CAU' alt={'avatar'}/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default PostItem;