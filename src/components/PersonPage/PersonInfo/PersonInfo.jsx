import React from 'react'
import PropTypes from 'prop-types'

import style from './PersonInfo.module.scss'

const PersonInfo = ({ personInfo }) => {
  return (
    <>
      <div className={style.wrapper}>
        <ul className={style.list}>
          {personInfo.map(
            ({ title, data }) =>
              data && (
                <li key={title} className={style.item}>
                  <span className={style.title}>{title}</span>: {data}
                </li>
              )
          )}
        </ul>
      </div>
    </>
  )
}

export default PersonInfo

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
}
