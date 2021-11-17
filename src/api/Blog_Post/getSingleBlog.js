import axios from 'axios'

// importing base url
import baseURL from '../URL'

// importing get token
import getToken from '../Auth_Token/getToken'

function getSingleBlog(id) {
  const data = axios.get(`${baseURL}post/${id}/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default getSingleBlog
