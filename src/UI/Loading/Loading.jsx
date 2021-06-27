import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import cn from 'classnames'

import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'

import '../index.scss'
import style from './Loading.module.scss'

const Loading = ({ theme = 'white', isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null)

  useEffect(() => {
    switch (theme) {
      case 'black':
        setLoaderIcon(loaderBlack)
        break
      case 'white':
        setLoaderIcon(loaderWhite)
        break
      case 'blue':
        setLoaderIcon(loaderBlue)
        break
      default:
        setLoaderIcon(loaderBlack)
    }
  }, [])

  return (
    <img
      className={cn(style.loader, isShadow && style.shadow, classes)}
      src={loaderIcon}
      alt="Loader"
    />
  )
}

Loading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
}

export default Loading
