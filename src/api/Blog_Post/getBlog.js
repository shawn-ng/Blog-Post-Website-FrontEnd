import axios from 'axios'

// import base url
import baseURL from '../URL'
// import token function
import getToken from '../Auth_Token/getToken'

function getBlog() {
  const data = axios.get(`${baseURL}post/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default getBlog
