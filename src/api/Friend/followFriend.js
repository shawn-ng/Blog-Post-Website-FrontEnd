import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function followFriend(id) {
  const data = {
    user_friend_id_two: id,
    request_status: false,
  }
  const call = axios.post(`${baseURL}checkFriend/`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
  return call
}

export default followFriend
