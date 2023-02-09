import React from 'react';
import { classNames } from '../../utils/helpers/classNames.helpers.js';
import styles from './Styles.module.scss';

const Input = ({ type, icon, button, onblur, fullWidth, mb, placeholder, min, max }) => {
    return (
        <div className={
            classNames(
                `${styles.wrapp}
                ${fullWidth ? styles.fullWidth : ''}
                ${icon ? styles.flexWrapp : ''} 
                ${mb ? styles[`mb-${mb}`] : ''}`)}>
            {icon && <div className={styles.icon}>
                {icon}
            </div>}
            <div className={classNames(`${button ? styles.justifyBetween : ''}`)}>
                <input type={type} minLength={min} maxLength={max} placeholder={placeholder} onBlur={onblur} />
                {button}
            </div>
        </div>
    );
};

export default Input;
