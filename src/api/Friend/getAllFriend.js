import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function userAllFriends() {
  const data = axios.get(`${baseURL}friend/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default userAllFriends
