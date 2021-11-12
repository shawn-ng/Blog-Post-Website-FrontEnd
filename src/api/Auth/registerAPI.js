import axios from 'axios'

import baseURL from '../URL'

function registering(data) {
  return axios.post(`${baseURL}api/register`, data)
}

export default registering
