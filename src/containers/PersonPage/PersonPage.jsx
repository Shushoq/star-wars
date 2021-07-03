import React, { useEffect, useState, Suspense } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import withErrorApi from '@HOC/withErrorApi'
import { getApiResource } from '@utils/network'
import { API_PERSON } from '@constants/api'
import { getPeopleImage } from '@services/getPeopleData'
import PersonPhoto from '@components/PersonPage/PersonPhoto'
import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'

import style from './PersonPage.module.scss'
import Loading from '@UI/Loading'

const PersonFilms = React.lazy(() =>
  import('@components/PersonPage/PersonFilms')
)

const PersonPage = ({ match, setErrorApi }) => {
  const [personId, setpersonId] = useState(null)
  const [personInfo, setPersonInfo] = useState([])
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState([])
  const [personFavorite, setPersonFavorite] = useState(false)

  const storeData = useSelector((state) => state.favoriteReducer)

  useEffect(() => {
    ;(async () => {
      const id = match.params.id
      const res = await getApiResource(`${API_PERSON}/${id}/`)
      setpersonId(id)
      setErrorApi(!res)
      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

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
          <PersonPhoto
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<Loading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
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
