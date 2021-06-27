import React from 'react'
import PropTypes from 'prop-types'

import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

import style from './PersonPhoto.module.scss'

const PersonPhoto = ({ personName, personPhoto }) => {
  return (
    <div className={style.container}>
      <img className={style.photo} src={personPhoto} alt={personName} />
    </div>
  )
}

export default PersonPhoto

PersonPhoto.propTypes = {
  personName: PropTypes.string,
  personPhoto: PropTypes.string,
}
