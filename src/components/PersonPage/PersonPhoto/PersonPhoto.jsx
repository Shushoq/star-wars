import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { removePersonToFavorite, setPersonToFavorite } from '@store/actions'

import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'

import style from './PersonPhoto.module.scss'

const PersonPhoto = ({
  personName,
  personPhoto,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch()

  const toggleFavoriteHandler = () => {
    if (personFavorite) {
      dispatch(removePersonToFavorite(personId))
      setPersonFavorite(false)
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            personPhoto: personPhoto,
          },
        })
      )
      setPersonFavorite(true)
    }
  }

  return (
    <>
      <div className={style.container}>
        <img className={style.photo} src={personPhoto} alt={personName} />
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          onClick={toggleFavoriteHandler}
          className={style.favorite}
          alt="Add to favorite"
        />
      </div>
    </>
  )
}

export default PersonPhoto

PersonPhoto.propTypes = {
  personName: PropTypes.string,
  personPhoto: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
}
