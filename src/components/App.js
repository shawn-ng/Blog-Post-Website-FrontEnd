import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// importing components
import Home from './common/Home.js'
import Register from './register_page/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
