import React from 'react';
import styles from './Styles.module.scss';

const IconLink = ({ icon, link }) => {
    return (
        <a className={styles.wrapp} href={link}>
            {icon}
        </a>
    );
};

export default IconLink;
