import React from 'react';
import { classNames } from '../../utils/helpers/classNames.helpers.js';
import styles from './Styles.module.scss';

const Typography = ({ type, children, size, color, weight, mb, transform, align }) => {
  return React.createElement(
    type,
    {
      className: classNames(
        `${styles[type]} ${size ? styles[size] : ''} 
        ${color ? styles[color] : ''} 
        ${weight ? styles[weight] : ''} 
        ${mb ? styles[`mb-${mb}`] : ''}
        ${transform ? styles[transform] : ''}
        ${align ? styles[align] : ''}`),
      children: children
    }
  )
};

export default Typography;
