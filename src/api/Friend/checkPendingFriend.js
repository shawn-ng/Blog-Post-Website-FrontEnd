import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

async function checkPendingFriend() {
  const data = await axios.get(`${baseURL}pendingFriend/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  let result = []

  data.data.forEach((element) => {
    result.push(element.user_friend_id_two)
  })
  return result
}

export default checkPendingFriend
