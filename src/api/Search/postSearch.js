import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function postSearch(keyword) {
  const data = axios.get(`${baseURL}post/?search=${keyword}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default postSearch
