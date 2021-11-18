import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function profileSearch(keyword) {
  const data = axios.get(`${baseURL}userProfile/?search=${keyword}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default profileSearch
