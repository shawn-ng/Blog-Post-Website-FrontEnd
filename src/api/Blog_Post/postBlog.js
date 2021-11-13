import axios from 'axios'

// importing base url
import baseURL from '../URL'
// import get token function
import getToken from '../Auth_Token/getToken'

function postNewBlog(data) {
  const { data } = axios.post(`${baseURL}post/`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}

export default postNewBlog
