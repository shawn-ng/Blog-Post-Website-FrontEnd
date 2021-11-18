import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function userSearch(keyword) {
  const data = axios.get(`${baseURL}userSearch/?search=${keyword}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default userSearch
