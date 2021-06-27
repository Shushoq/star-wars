import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import withErrorApi from '@HOC/withErrorApi'
import { getApiResource } from '@utils/network'
import { API_PERSON } from '@constants/api'
import { getPeopleImage } from '@services/getPeopleData'
import PersonPhoto from '@components/PersonPage/PersonPhoto'
import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'
import PersonFilms from '@components/PersonPage/PersonFilms'

import style from './PersonPage.module.scss'

const PersonPage = ({ match, setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState([])
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState([])

  useEffect(() => {
    ;(async () => {
      const id = match.params.id
      const res = await getApiResource(`${API_PERSON}/${id}/`)
      setErrorApi(!res)
      setPersonInfo([
        { title: 'Height', data: res.height },
        { title: 'Mass', data: res.mass },
        { title: 'Hair color', data: res.hair_color },
        { title: 'Skin color', data: res.skin_color },
        { title: 'Eye color', data: res.eye_color },
        { title: 'Gender', data: res.gender },
        { title: 'Birth year', data: res.birth_year },
      ])
      setPersonName(res.name)
      setPersonPhoto(getPeopleImage(id))

      res.films.length && setPersonFilms(res.films)
    })()
  }, [])

  return (
    <>
      <PersonLinkBack />
      <div className={style.wrapper}>
        <span className={style.name}>{personName}</span>
        <div className={style.container}>
          <PersonPhoto personPhoto={personPhoto} personName={personName} />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && <PersonFilms personFilms={personFilms} />}
        </div>
      </div>
    </>
  )
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
  match: PropTypes.object,
}

export default withErrorApi(PersonPage)
