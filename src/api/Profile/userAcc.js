import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function getUserDetails() {
  const data = axios.get(`${baseURL}userProfile/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default getUserDetails
