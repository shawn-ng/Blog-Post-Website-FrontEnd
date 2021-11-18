import getToken from './getToken'

function getPayload() {
  const token = getToken()
  if (!token) {
    return false
  }

  const parts = token.split('.')

  if (parts.length < 3) {
    return false
  }

  const jwt = atob(parts[1])
  const jwtParsed = JSON.parse(jwt)

  return jwtParsed
}

export default getPayload
