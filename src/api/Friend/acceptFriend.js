import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function acceptFriendRequest(id) {
  const data = {
    request_status: true,
  }

  const call = axios.put(`${baseURL}friend/?id=${id}`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return call
}

export default acceptFriendRequest
