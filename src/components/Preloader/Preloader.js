import React from 'react';
import styles from "../Users/users.module.scss";
import preloader from '../../assets/img/loader.svg'

const Preloader = props => {
    return (
        <div className={styles.preLoader}>
            <img src={preloader} alt='preloader'/>
        </div>
    );
};

export default Preloader;