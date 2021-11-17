import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function getSingleProfile(id) {
  const data = axios.get(`${baseURL}userProfile/${id}/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default getSingleProfile
