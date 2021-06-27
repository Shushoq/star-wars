import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './PeopleList.module.scss'

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list}>
      {people.map(({ name, url, id, image }) => (
        <li className={styles.item} key={id}>
          <Link className={styles.link} to={`/people/${id}`}>
            <img className={styles.img} src={image} alt={name} />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PeopleList

PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
}
