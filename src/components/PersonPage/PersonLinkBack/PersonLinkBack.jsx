import React from 'react'
import { useHistory } from 'react-router';

import iconBack from './img/back.svg';

import style from './PersonLinkBack.module.scss'

const PersonLinkBack = () => {
  const history = useHistory()
  const handleGoBack = (event) => {
    event.preventDefault()
    history.goBack()
  }

  return (
    <a href="#" onClick={handleGoBack} className={style.link}>
      <img className={style.img} src={iconBack} alt="Go back" />
            <span>Go back</span>
    </a>
  )
}

export default PersonLinkBack
