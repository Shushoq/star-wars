import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SearchPageInfo.module.scss'

const SearchPageInfo = ({ people }) => (
  <>
    {people.length ? (
      <ul className={styles.list}>
        {people.map(({ id, name, img }) => (
          <li className={styles.item} key={id}>
            <Link to={`/people/${id}`}>
              <img className={styles.photo} src={img} alt={name} />
              <p className={styles.name}>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <h2 className={styles.comment}>No results</h2>
    )}
  </>
)

export default SearchPageInfo
