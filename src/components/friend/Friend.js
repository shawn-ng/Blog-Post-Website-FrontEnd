import React from 'react'
import { Link } from 'react-router-dom'

/*
- Making a search friend API
- Search Bar
- Button to add Friend
- Decline Friend request
- Show existing Friend 
- remove existing friend
*/
import userSearch from '../../api/Search/userSearch'
import userAllFriends from '../../api/Friend/getAllFriend'
import getPayload from '../../api/Auth_Token/getPayLoad'
import friendRequest from '../../api/Friend/friendRequest'
import acceptFriendRequest from '../../api/Friend/acceptFriend'
import rejectFriendRequest from '../../api/Friend/rejectFriend'

function Friend() {
  let [searchInput, setSearchInput] = React.useState({
    input: {
      keyword: '',
    },
  })
  let [update, setUpdate] = React.useState(true)
  let [searchResult, setSearchResult] = React.useState()
  let [allFriendInfo, setAllFriend] = React.useState()
  let [currentUserID, setUserID] = React.useState()
  let [pendingInfo, setPendingInfo] = React.useState()

  // Search Function
  async function gettingSearchFunction() {
    try {
      const data = await userSearch(searchInput.input.keyword)

      setSearchResult(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  // get pay load functipn
  function gettingPayLoad() {
    const data = getPayload()

    setUserID(data.user_id)
  }

  // Getting all friend
  async function getAllFriend() {
    try {
      const data = await userAllFriends()

      setAllFriend(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  // getting all friend request
  async function gettingPending() {
    try {
      const data = await friendRequest()

      setPendingInfo(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  // handle accept friend
  async function acceptFriend(e) {
    setUpdate(false)
    await acceptFriendRequest(e.target.id)
    setUpdate(false)
  }

  // reject friend
  async function rejectFriend(e) {
    setUpdate(false)
    await rejectFriendRequest(e.target.id)
    setUpdate(true)
  }

  function searchChange(e) {
    const data = e.target.value

    setSearchInput({
      input: {
        ...searchInput.input,
        [e.target.name]: data,
      },
    })
  }

  React.useEffect(() => {
    gettingSearchFunction()
  }, [searchInput])

  React.useEffect(() => {
    getAllFriend()
    gettingPayLoad()
    gettingPending()
  }, [update])

  return (
    <div className="container mx-auto my-5 p-4 flex flex-col">
      <div className="flex flex-row justify-center">
        <input
          type="text"
          placeholder="e.g. John"
          className="shadow appearance-none border rounded w-4/6 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="keyword"
          onChange={searchChange}
          value={searchInput.input.keyword}
        />
      </div>
      {searchInput.input.keyword ? (
        <div>
          {searchResult ? (
            <>
              {searchResult
                ? searchResult.map((user) => {
                    return (
                      <div
                        key={user.id}
                        className="flex flex-row justify-center items-center hover:bg-gray-500 transition duration-300 ease-in-out border-2 border-light-blue-500 border-opacity-50 rounded mt-2"
                      >
                        <div className="rounded-full h-16 w-16 mt-3 bg-indigo-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-15 w-15"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col w-full hover:text-white">
                          <Link to={`/user/account/${user.id}/`}>
                            <div className="p-2">
                              <p>
                                <strong>{user.username}</strong>
                              </p>
                            </div>
                            <div className="pl-2">
                              <p>{user.email}</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    )
                  })
                : null}
            </>
          ) : null}
        </div>
      ) : (
        <div className="flex flex-col justify-around my-4">
          {allFriendInfo
            ? allFriendInfo.map((friend) => {
                if (friend.id % 2 !== 0) {
                  return (
                    <div
                      key={friend.id}
                      className="flex flex-row justify-center items-center hover:bg-gray-500 border-2 border-light-blue-500 border-opacity-50 rounded mt-2"
                    >
                      <div className="rounded-full h-16 w-16 mt-3 bg-indigo-900">
                        {friend.user_friend_id_one.id !== currentUserID ? (
                          <>
                            {friend.user_friend_id_one.user_image_url ? (
                              <img
                                src={friend.user_friend_id_one.user_image_url}
                              />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-15 w-15"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            )}
                          </>
                        ) : (
                          <>
                            {friend.user_friend_id_two.user_image_url ? (
                              <img
                                src={friend.user_friend_id_two.user_image_url}
                              />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-15 w-15"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            )}
                          </>
                        )}
                      </div>
                      <div className="flex flex-col w-full hover:text-white">
                        {friend.user_friend_id_one.id !== currentUserID ? (
                          <>
                            <Link
                              to={`/user/account/${friend.user_friend_id_one.id}/`}
                            >
                              <div className="p-2">
                                <p>
                                  <strong>
                                    {friend.user_friend_id_one.username}
                                  </strong>
                                </p>
                              </div>
                              <div className="pl-2">
                                <p>{friend.user_friend_id_one.email}</p>
                              </div>
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link
                              to={`/user/account/${friend.user_friend_id_two.id}/`}
                            >
                              <div className="p-2">
                                <p>
                                  <strong>
                                    {friend.user_friend_id_two.username}
                                  </strong>
                                </p>
                              </div>
                              <div className="pl-2">
                                <p>{friend.user_friend_id_two.email}</p>
                              </div>
                            </Link>
                          </>
                        )}
                      </div>
                      <div className="mr-5">
                        <p className="text-gray-300">Friend</p>
                      </div>
                    </div>
                  )
                }
              })
            : null}
        </div>
      )}
      <br />
      <div className="flex flex-col justify-around my-4">
        <div>
          <p className="text-white">Friend Request</p>
        </div>
        {pendingInfo ? (
          <>
            {pendingInfo.map((friend) => {
              if (friend.who_send.id !== currentUserID) {
                return (
                  <>
                    <div
                      key={friend.id}
                      className="flex flex-row justify-center items-center hover:bg-gray-500 transition duration-300 ease-in-out border-2 border-light-blue-500 border-opacity-50 rounded mt-2"
                    >
                      <div className="rounded-full h-16 w-16 mt-3 bg-indigo-900">
                        {friend.user_friend_id_two.user_image_url ? (
                          <img src={friend.user_friend_id_two.user_image_url} />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-15 w-15"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="flex flex-col w-full hover:text-white">
                        <Link
                          to={`/user/account/${friend.user_friend_id_two.id}/`}
                        >
                          <div className="p-2">
                            <p>
                              <strong>
                                {friend.user_friend_id_two.username}
                              </strong>
                            </p>
                          </div>
                          <div className="pl-2">
                            <p>{friend.user_friend_id_two.email}</p>
                          </div>
                        </Link>
                      </div>
                      <div className="mr-5 bg-indigo-300 p-3 transform hover:scale-110 hover:bg-indigo-500 transition duration-300 ease-in-out rounded">
                        <button
                          className="button"
                          onClick={acceptFriend}
                          id={friend.id}
                        >
                          Accept
                        </button>
                      </div>
                      <div className="mr-5 bg-red-300 p-3 transform hover:scale-110 hover:bg-red-500 transition duration-300 ease-in-out rounded">
                        <button
                          className="button"
                          onClick={rejectFriend}
                          id={friend.id}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </>
                )
              } else {
                return null
              }
            })}
          </>
        ) : (
          <p>loading</p>
        )}
      </div>
      <br />
      <div className="flex flex-col justify-around my-4">
        <div>
          <p className="text-white">Request Sent</p>
        </div>
        {pendingInfo ? (
          <>
            {pendingInfo.map((friend) => {
              if (friend.who_send.id === currentUserID) {
                return (
                  <>
                    <div
                      key={friend.id}
                      className="flex flex-row justify-center items-center hover:bg-gray-500 transition duration-300 ease-in-out border-2 border-light-blue-500 border-opacity-50 rounded mt-2"
                    >
                      <div className="rounded-full h-16 w-16 mt-3 bg-indigo-900">
                        {friend.user_friend_id_two.user_image_url ? (
                          <img src={friend.user_friend_id_two.user_image_url} />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-15 w-15"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="flex flex-col w-full hover:text-white">
                        <Link
                          to={`/user/account/${friend.user_friend_id_two.id}/`}
                        >
                          <div className="p-2">
                            <p>
                              <strong>
                                {friend.user_friend_id_two.username}
                              </strong>
                            </p>
                          </div>
                          <div className="pl-2">
                            <p>{friend.user_friend_id_two.email}</p>
                          </div>
                        </Link>
                      </div>
                      <div className="mr-5 bg-gray-200 opacity-30 p-3 rounded">
                        <button className="button" id={friend.id}>
                          Pending
                        </button>
                      </div>
                    </div>
                  </>
                )
              } else {
                return null
              }
            })}
          </>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  )
}

export default Friend
