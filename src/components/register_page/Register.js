import React from 'react'

// first name
// last name
// username
// email
// password

function Register() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="usernameInput">Username</label>
          <input
            type="input"
            id="usernameInput"
            className="form-control"
            placeholder="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fisrtNameInput">First Name</label>
          <input
            type="input"
            id="fisrtNameInput"
            className="form-control"
            placeholder="first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">Last Name</label>
          <input
            type="input"
            id="lastNameInput"
            className="form-control"
            placeholder="last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email</label>
          <input
            type="email"
            id="emailInput"
            className="form-control"
            placeholder="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            placeholder="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmedPasswordInput">Confirmed Password</label>
          <input
            type="password"
            id="confirmedpasswordInput"
            className="form-control"
            placeholder="confirmed password"
          />
        </div>
      </form>
    </div>
  )
}

export default Register
