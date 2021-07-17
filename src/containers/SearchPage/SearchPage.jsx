import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'

import withErrorApi from '@HOC/withErrorApi'
import { getApiResource } from '@utils/network'
import { API_SEARCH } from '@constants/api'

import { getPeopleImage, getPeopleId } from '@services/getPeopleData'

import Input from '@UI/Input/Input'
import SearchPageInfo from '@components/SearchPage/SearchPageInfo/SearchPageInfo'

import style from './SearchPage.module.scss'

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('')
  const [people, setPeople] = useState([])

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param)

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)

        return {
          id,
          name,
          img,
        }
      })
      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResponse('')
  }, [])

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  )

  const handleInputChange = (value) => {
    setInputSearchValue(value)
    debouncedGetResponse(value)
  }

  return (
    <>
      <h1 className="title">Search</h1>
      <Input
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder={`Enter character name`}
        classes={style.input}
      />
      <SearchPageInfo people={people} />
    </>
  )
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(SearchPage)
