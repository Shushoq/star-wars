import React from 'react'
import styles from './PeopleList.module.scss'

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list}>
      {people.map(({ name, url, id, image }) => (
        <li className={styles.item} key={id}>
          <a className={styles.link} href="#">
            <img className={styles.img} src={image} alt={name} />
            <p>{name}</p>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default PeopleList
