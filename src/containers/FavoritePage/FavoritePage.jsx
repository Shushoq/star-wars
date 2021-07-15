import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PeopleList from '@components/PeoplePage/PeopleList'
import style from './FavoritePage.module.scss'

const FavoritePage = () => {
  const [people, setPeople] = useState([])
  const storeData = useSelector((state) => state.favoriteReducer)

  useEffect(() => {
    const arr = Object.entries(storeData)
    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          image: item[1].personPhoto,
          name: item[1].name,
        }
      })

      setPeople(res)
    }
  }, [])

  return (
    <>
      <h1 className='title'>Favorites</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={style.comment}>No data...</h2>
      )}
    </>
  )
}

export default FavoritePage
