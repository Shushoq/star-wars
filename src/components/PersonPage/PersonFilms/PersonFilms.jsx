import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'

import { makeConcurrentRequest } from '@utils/network'

import style from './PersonFilms.module.scss'

const PersonFilms = ({ personFilms }) => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await makeConcurrentRequest(personFilms)

      setFilms(response)
    })()
  }, [])

  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {films &&
          films
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(({ title, episode_id }) => (
              <li className={style.item} key={episode_id}>
                <span className={style.episode}>Episode {episode_id}</span>
                <span className={style.colon}>:</span>
                <span className={style.title}>{title}</span>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default PersonFilms

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
}
