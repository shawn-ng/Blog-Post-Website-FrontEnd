import React from 'react'

// importing resgister middleware
import registerCheck from './registerMiddleware.js'

function Register() {
  // input value state
  let [inputState, setInputState] = React.useState({
    input: {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmedPassword: '',
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
  function handleSubmit(e) {
    e.preventDefault()
    if (registerCheck(inputState.input)) {
      // api call for registering
    } else {
      setErrorMessage('Password and password confirmation not matched!')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="first_name">First Name</label>
          <input
            type="input"
            id="first_name"
            className="form-control"
            placeholder="first name"
            onChange={handleChange}
            value={inputState.input.first_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="input"
            id="last_name"
            className="form-control"
            placeholder="last name"
            onChange={handleChange}
            value={inputState.input.last_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="email"
            onChange={handleChange}
            value={inputState.input.email}
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
        <div className="form-group">
          <label htmlFor="confirmedPassword">Confirmed Password</label>
          <input
            type="password"
            id="confirmedPassword"
            className="form-control"
            placeholder="confirmed password"
            onChange={handleChange}
            value={inputState.input.confirmedPassword}
          />
        </div>
        {
          <div>
            <p>{errorMessage}</p>
          </div>
        }
        <div className="form-group">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  )
}

export default Register
