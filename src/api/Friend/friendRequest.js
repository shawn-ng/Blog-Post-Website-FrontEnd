import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function friendRequest() {
  const data = axios.get(`${baseURL}friendStatus/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default friendRequest
