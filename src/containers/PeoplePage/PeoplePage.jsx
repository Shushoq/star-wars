import React, { useEffect, useState } from 'react'
import { getApiResource } from '@utils/network'
import { API_PEOPLE } from '@constants/api'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'
import PeopleList from '@components/PeoplePage/PeopleList'
import withErrorApi from '@HOC/withErrorApi'

// import styles from './PeoplePage.module.scss'

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState([])

  const getResource = async (url) => {
    const res = await getApiResource(url)

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const image = getPeopleImage(id)
        return {
          id,
          image,
          name,
          url,
        }
      })
      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }
  
  useEffect(() => {
    getResource(API_PEOPLE)
  }, [])

  return <>{people && <PeopleList people={people} />}</>
}

export default withErrorApi(PeoplePage)
