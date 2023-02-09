import React from 'react';
import { classNames } from '../../utils/helpers/classNames.helpers.js';
import styles from './Styles.module.scss';

const Section = ({ children, fullWidth, fullScreen, indents, extraClass }) => {
    return (
        <section className={classNames(`${fullScreen ? styles.fullScreen : ''} ${indents ? styles.indents : ''} ${extraClass ? extraClass : ''} ${fullWidth ? styles.fullWidth : styles.container}`)}>
            {children}
        </section>
    );
};

export default Section;
