import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function deleteBlog(id) {
  return axios.delete(`${baseURL}post/${id}/`, {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  })
}

export default deleteBlog
