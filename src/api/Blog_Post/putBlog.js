import axios from 'axios'

import baseURL from '../URL'

import getToken from '../Auth_Token/getToken'

function putBlog(id, data) {
  return axios.put(`${baseURL}post/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}

export default putBlog
