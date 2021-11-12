import axios from 'axios'

import baseURL from '../URL'

function loginIn(data) {
  return axios.post(`${baseURL}api/token/`, data)
}

export default loginIn
