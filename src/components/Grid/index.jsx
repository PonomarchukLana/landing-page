import React from 'react';
import { classNames } from '../../utils/helpers/classNames.helpers';
import styles from './Styles.module.scss';

const Grid = ({ children, sm, md, lg, mbMd, mbSm}) => {

    return (
        <div className={
            classNames(
                `${styles.wrapper} 
                ${md ? styles[`md-${md}`] : ''} 
                ${lg ? styles[`lg-${lg}`] : ''} 
                ${sm ? styles[`sm-${sm}`] : ''}  
                ${mbSm ? styles[`mbSm-${mbSm}`] : ''}
                ${mbMd ? styles[`mbMd-${mbMd}`] : ''}`)}>
            {children}
        </div>
    );
};

export default Grid;
