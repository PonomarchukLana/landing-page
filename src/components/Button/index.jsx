import React from 'react';
import { classNames } from '../../utils/helpers/classNames.helpers.js';
import styles from './Styles.module.scss';

const Button = ({ children, click, colored, round, fullwidth }) => {
    return (
        <button
            className={classNames(`${styles.button} ${colored ? styles.colored : styles.colorless} ${round ? styles.round : ''} ${fullwidth ? styles.fullwidth : ''} ${round ? '' : styles.hoverAnimation}`)}
            onClick={click}>
            {children}
        </button>
    );
};

export default Button;
