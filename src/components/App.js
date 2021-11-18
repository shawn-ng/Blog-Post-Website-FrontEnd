import React from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

// importing components
import NavBar from './common/NavBar.js'
import Home from './home_page/Home.js'
import Register from './register_page/Register'
import Login from './login_page/Login.js'
import SinglePage from './single_blog_page/SingleBlogPage.js'
import UserAcc from './user_page/UserAcc.js'
import Profile from './profile_page/Profile.js'
import Friend from './friend/Friend.js'

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
        { path: '/user/account/:id/', element: <UserAcc /> },
        { path: '/user/profile/:id/', element: <Profile /> },
        { path: '/user/friend/', element: <Friend /> },
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
