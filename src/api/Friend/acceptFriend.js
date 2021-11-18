import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function acceptFriendRequest(id) {
  const data = axios.put(`${baseURL}friend/?id=${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default acceptFriendRequest
