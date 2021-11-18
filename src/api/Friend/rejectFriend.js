import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function rejectFriendRequest(id) {
  const data = axios.delete(`${baseURL}friend/?id=${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default rejectFriendRequest
