import React from 'react'
import PropTypes from 'prop-types'
import style from './PeopleNavigation.module.scss'
import { Link } from 'react-router-dom'

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResource(nextPage)
  const handleChangePrev = () => getResource(prevPage)

  return (
    <>
      <h1 className="title">Navigation</h1>
      <div className={style.container}>
        <Link className={style.link} to={`/people/?page=${counterPage - 1}`}>
          <button
            onClick={handleChangePrev}
            className={style.buttons}
            disabled={!prevPage}
          >
            Previous
          </button>
        </Link>
        <Link className={style.link} to={`/people/?page=${counterPage + 1}`}>
          <button
            onClick={handleChangeNext}
            className={style.buttons}
            disabled={!nextPage}
          >
            Next
          </button>
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
