import React from 'react'

// import login in api
import loginIn from '../../api/Auth/loginAPI'

// import store token function
import storeToken from '../../api/Auth_Token/storeToken'

function Login() {
  // input value state
  let [inputState, setInputState] = React.useState({
    input: {
      username: '',
      password: '',
    },
  })

  let [errorMessage, setErrorMessage] = React.useState('')

  // function to store input value
  function handleChange(e) {
    const targetInput = e.target.id
    setInputState({
      input: {
        ...inputState.input,
        [targetInput]: e.target.value,
      },
    })
  }

  // function to submit
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const token = await loginIn(inputState.input)
      // storing token into local storage
      storeToken(token.data.access)
    } catch (err) {
      console.log(err)
      setErrorMessage('Password or username not match.')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="input"
            id="username"
            className="form-control"
            placeholder="username"
            onChange={handleChange}
            value={inputState.input.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="password"
            onChange={handleChange}
            value={inputState.input.password}
          />
        </div>
        {
          <div>
            <p>{errorMessage}</p>
          </div>
        }
        <div className="form-group">
          <input type="submit" value="Login" className="btn" />
        </div>
      </form>
    </div>
  )
}

export default Login
