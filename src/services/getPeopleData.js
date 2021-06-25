import {
  HTTPS,
  SWAPI_ROOT,
  SWAPI_PEOPLE,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
  SWAPI_PARAM_PAGE,
} from '@constants/api'

export const getPeoplePageId = (url) => {
  return +url.split(SWAPI_PARAM_PAGE)[1]
}

const getId = (url, category) => {
  return url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '')
}

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = (id) =>
  `${URL_IMG_PERSON}${id}${GUIDE_IMG_EXTENSION}`
