import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

async function checkAllFriend() {
  const data = await axios.get(`${baseURL}checkFriend/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  let result = {}

  data.data.forEach((element) => {
    result[element.user_friend_id_two] = { id: element.id }
  })
  return result
}

export default checkAllFriend
