import axios from 'axios'

// importing base url
import baseURL from '../URL'
// import get token function
import getToken from '../Auth_Token/getToken'

function postNewBlog(inputData) {
  const { data } = axios.post(`${baseURL}post/`, inputData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return data
}

export default postNewBlog
