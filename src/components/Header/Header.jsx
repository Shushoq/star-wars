import React from 'react'
import { NavLink } from 'react-router-dom'
import Favorite from '../Favorite'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <ul className={styles.list}>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/people?page=1">People</NavLink>
          </li>
          <li>
            <NavLink exact to="/not-found">
              Not Found
            </NavLink>
          </li>
        </ul>
        <Favorite/>
      </div>
    </>
  )
}

export default Header
