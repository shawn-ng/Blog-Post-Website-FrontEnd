import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// importing components
import Home from './home_page/Home.js'
import Register from './register_page/Register'
import Login from './login_page/Login.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
