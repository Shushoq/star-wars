import React from 'react'
import PropTypes from 'prop-types'
import '../index.scss'
import style from './Button.module.scss'
import cn from 'classnames'

const Button = ({ text, onClick, disabled, theme = 'dark', classes }) => {
  return (
    <button
      className={cn(style.button, style[theme], classes)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  classes: PropTypes.string,
}

export default Button
