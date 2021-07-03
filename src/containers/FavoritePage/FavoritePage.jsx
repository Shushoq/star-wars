import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PeopleList from '@components/PeoplePage/PeopleList'
import style from './FavoritePage.module.scss'

const FavoritePage = () => {
  const [people, setPeople] = useState([])
  const storeData = useSelector((state) => state.favoriteReducer)

  useEffect(() => {
    const arr = Object.entries(storeData)
    console.log(storeData)
    console.log(arr)
  }, [])

  return (
    <>
      <h1>Favorite page</h1>
      <PeopleList people={people} />
    </>
  )
}

export default FavoritePage
