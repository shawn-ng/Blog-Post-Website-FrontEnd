export default function registerCheck({ password, confirmedPassword }) {
  if (password === confirmedPassword) return true
  else return false
}
