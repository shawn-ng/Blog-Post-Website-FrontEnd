export default function registerCheck({ password, confirmedPassword }) {
  console.log(password)
  console.log(confirmedPassword)
  if (password === confirmedPassword) return true
  else return false
}
