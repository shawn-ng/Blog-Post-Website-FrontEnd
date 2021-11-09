import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importing components
import Home from './common/Home.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
