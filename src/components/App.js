import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom'

// importing components
import NavBar from './common/NavBar.js'
import Home from './home_page/Home.js'
import Register from './register_page/Register'
import Login from './login_page/Login.js'
import SinglePage from './single_blog_page/SingleBlogPage.js'

function AppWrapper() {
  let element = useRoutes([
    { path: '/register/', element: <Register /> },
    { path: '/login/', element: <Login /> },
    {
      path: '/user',
      element: <NavBar />,
      children: [
        { path: '/user/home/', element: <Home /> },
        { path: '/user/:id/', element: <SinglePage /> },
      ],
    },
  ])
  return element
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  )
}

export default App
