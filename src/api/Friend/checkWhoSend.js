import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

async function checkPendingWhoSend() {
  const data = await axios.get(`${baseURL}pendingFriend/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  let result = {}

  data.data.forEach((element) => {
    result[element.user_friend_id_two] = {
      who_send: element.who_send,
      id: element.id,
    }
  })

  return result
}

export default checkPendingWhoSend
