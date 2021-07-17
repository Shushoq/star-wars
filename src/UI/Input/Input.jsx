import React from 'react'
import PropTypes from 'prop-types';
import cn from 'classnames';

import icon from './img/cancel.svg';

import '../index.scss';
import styles from './Input.module.scss';

const Input = ({
    value,
    handleInputChange,
    placeholder,
    classes,
}) => (
    <div className={cn(styles.wrapper, classes)}>
        <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
        />
        <img
            onClick={() => value && handleInputChange('')}
            src={icon}
            className={cn(styles.clear, !value && styles.clear__disabled)}
            alt="Clear"
        />
    </div>
)

Input.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
}

export default Input;