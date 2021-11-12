import axios from 'axios'

import baseURL from '../URL'

function registering(data) {
  return axios.post(`${baseURL}register/`, data)
}
