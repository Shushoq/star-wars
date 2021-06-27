import React from 'react'
import { PropTypes } from 'prop-types'

import style from './PersonFilms.module.scss'

const PersonFilms = ({ personFilms }) => {
  console.log(personFilms)
  return <div></div>
}

export default PersonFilms

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
}
