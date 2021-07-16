import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from '@context/ThemeProvider'
import Favorite from '../Favorite'

import imgSpaceStation from './img/space-station.svg'
import imgDroid from './img/droid.svg'
import imgLightsaber from './img/lightsaber.svg'

import style from './Header.module.scss'
import { useState } from 'react'

const Header = () => {
  const [icon, setIcon] = useState(imgSpaceStation)
  const isTheme = useTheme()

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber)
        break
      case THEME_DARK:
        setIcon(imgSpaceStation)
        break
      case THEME_NEITRAL:
        setIcon(imgDroid)
        break
      default:
        setIcon(imgSpaceStation)
    }
  }, [isTheme])

  return (
    <>
      <div className={style.header}>
        <img className={style.logo} src={icon} alt="Star Wars" />
        <ul className={style.list}>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/people?page=1">People</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink exact to="/not-found">
              Not Found
            </NavLink>
          </li>
        </ul>
        <Favorite />
      </div>
    </>
  )
}

export default Header
