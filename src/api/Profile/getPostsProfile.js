import axios from 'axios'

import getToken from '../Auth_Token/getToken'

import baseURL from '../URL'

function getUserPosts(id) {
  const data = axios.get(`${baseURL}allUserPost/${id}/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default getUserPosts
