import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// importing remove token ket
import removeToken from '../../api/Auth_Token/removeToken'

function NavBar() {
  let [openSideBar, setOpenSideBar] = React.useState('-translate-x-full')

  function sideBarButton(e) {
    if (e.target.id === 'open-menu-button') {
      setOpenSideBar('')
    } else {
      setOpenSideBar('-translate-x-full')
    }
  }

  // handle logout
  function logOutButton() {
    removeToken()
  }

  return (
    <div className="relative min-h-screen flex bg-gray-700">
      <div className="bg-gray-800 text-gray-100 flex justify-between">
        <button
          className="p-4 focus:outline-none focus:bg-gray-700"
          id="open-menu-button"
          onClick={sideBarButton}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`side-bar bg-gray-800 w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${openSideBar} transition duration-500 ease-in-out`}
      >
        <button
          className=" top-3 right-3 absolute focus:outline-none focus:bg-gray-700"
          id="close-menu-button"
          onClick={sideBarButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <nav>
          <Link
            to="/"
            className="block text-white py-2.5 px-4 pb-5 mt-15 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            User Account
          </Link>
          <Link
            to="/"
            className="block text-white py-2.5 px-4 pb-5 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Profiles
          </Link>
          <Link
            to="/"
            className="block text-white py-2.5 px-4 pb-5 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            Friends
          </Link>
          <Link
            to="/login/"
            className="block text-white py-2.5 px-4 pb-5 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            onClick={logOutButton}
          >
            LogOut
          </Link>
        </nav>
      </div>

      <Outlet />
    </div>
  )
}

export default NavBar
