import React from 'react'
import PropTypes from 'prop-types'
import style from './PeopleNavigation.module.scss'
import { Link } from 'react-router-dom'
import Button from '@UI/Button'

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResource(nextPage)
  const handleChangePrev = () => getResource(prevPage)

  return (
    <>
      <h1 className="title">Navigation</h1>
      <div className={style.container}>
        <Link className={style.buttons} to={`/people/?page=${counterPage - 1}`}>
          <Button
            text="Previous"
            onClick={handleChangePrev}
            disabled={!prevPage}
          />
        </Link>
        <Link className={style.buttons} to={`/people/?page=${counterPage + 1}`}>
          <Button text="Next" onClick={handleChangeNext} disabled={!nextPage} />
        </Link>
      </div>
    </>
  )
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
}

export default PeopleNavigation
