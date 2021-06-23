import React from 'react'
import { NavLink } from 'react-router-dom'

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
            <NavLink exact to="/people">
              People
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header