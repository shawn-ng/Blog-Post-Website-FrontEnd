import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

import getUserDetails from '../../api/Profile/userAcc'
import checkAllFriend from '../../api/Friend/checkAllFriend'
import checkPendingFriend from '../../api/Friend/checkPendingFriend'
import checkPendingWhoSend from '../../api/Friend/checkWhoSend'
import getPayLoad from '../../api/Auth_Token/getPayLoad'
import acceptFriendRequest from '../../api/Friend/acceptFriend'
import rejectFriendRequest from '../../api/Friend/rejectFriend'
import followFriend from '../../api/Friend/followFriend'
/*
- adding friend function need to put in here and having a request page
- check whether the user acc is friend with the current visiting acc 
how? 
- getting the api to see all the friend list and make it into an array of list where it contain all friend list
- friend list and a pending list 
*/
function UserAcc() {
  const { id } = useParams()
  const navigate = useNavigate()

  let [userDetailState, setUserDetails] = React.useState()
  let [checkFriend, setCheckFriend] = React.useState()
  let [pendingFriend, setPendingFriend] = React.useState()
  let [pendingWhoSend, setPendingWhoSend] = React.useState()

  // getting user detail from api
  async function gettingUserDetails() {
    try {
      const data = await getUserDetails()
      setUserDetails(
        data.data.filter((user) => {
          return user.user_id_profile.id === id
        })
      )
    } catch (err) {
      console.log(err)
    }
  }

  // all friends details
  async function gettingAllKnownFriend() {
    try {
      const data = await checkAllFriend()
      setCheckFriend(data)
    } catch (err) {
      console.log(err)
    }
  }

  // pending friends
  async function gettingPendingFriend() {
    try {
      const data = await checkPendingFriend()

      setPendingFriend(data)
    } catch (err) {
      console.log(err)
    }
  }

  // getiing info who send friend request
  async function gettingPendingWhoSend() {
    try {
      const data = await checkPendingWhoSend()

      setPendingWhoSend(data)
    } catch (err) {
      console.log(err)
    }
  }

  // reject button
  async function rejectButton(e) {
    if (e.target.name === 'unfollow') {
      await rejectFriendRequest(parseFloat(e.target.id) + 1)
    } else {
      await rejectFriendRequest(e.target.id)
    }
    window.location.reload()
  }

  // accept button
  async function acceptButton(e) {
    await acceptFriendRequest(e.target.id)
    window.location.reload()
  }

  async function followButton(e) {
    await followFriend(e.target.id)

    window.location.reload()
  }

  // clicking the profile button
  function clickProfile(e) {
    const profile_id = e.target.id

    navigate(`/user/profile/${profile_id}/`)
  }

  React.useEffect(() => {
    gettingUserDetails()
    gettingAllKnownFriend()
    gettingPendingFriend()
    gettingPendingWhoSend()
  }, [])

  return (
    <div className="container mx-auto my-5 p-4 flex flex-col">
      {/* profile image and background image or design */}
      <div>
        <div className="flex flex-col">
          <div className="h-5/6 bg-indigo-300 p-3 rounded">
            <div className="rounded-full h-1/6 w-1/6 bg-indigo-700">
              {userDetailState ? (
                <>
                  {userDetailState[0].user_id_profile.user_image_url ? (
                    <img
                      src={userDetailState[0].user_id_profile.user_image_url}
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-15 w-15"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-15 w-15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
            {/* This part need to check whether user is friend with the account  */}
            <div className="flex flex-row-reverse">
              {id !== getPayLoad().user_id ? (
                <>
                  {checkFriend ? (
                    <>
                      {checkFriend[id] ? (
                        <div>
                          <button
                            className="bg-red-300 hover:bg-red-500 transition duration-300 ease-in-out transform hover:scale-110 p-2 rounded"
                            name="unfollow"
                            onClick={rejectButton}
                            id={checkFriend[id].id}
                          >
                            Unfollow
                          </button>
                        </div>
                      ) : (
                        <>
                          {pendingFriend ? (
                            <>
                              {pendingFriend.includes(id) ? (
                                <>
                                  {pendingWhoSend ? (
                                    <>
                                      {pendingWhoSend[id].who_send !==
                                      getPayLoad().user_id ? (
                                        <>
                                          <div>
                                            <button
                                              className="bg-red-300 hover:bg-red-500 transition duration-300 ease-in-out transform hover:scale-110 p-2 mr-2 rounded"
                                              onClick={rejectButton}
                                              id={pendingWhoSend[id].id}
                                            >
                                              Reject
                                            </button>
                                          </div>
                                          <div>
                                            <button
                                              className="bg-green-300 hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-110 p-2 mr-2 rounded"
                                              onClick={acceptButton}
                                              id={pendingWhoSend[id].id}
                                            >
                                              Accept
                                            </button>
                                          </div>
                                        </>
                                      ) : (
                                        <div>
                                          <button className="bg-gray-300 opacity-50 p-2 rounded">
                                            Pending
                                          </button>
                                        </div>
                                      )}
                                    </>
                                  ) : null}
                                </>
                              ) : (
                                <div>
                                  <button
                                    className="bg-blue-300 hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-110 p-2 rounded"
                                    onClick={followButton}
                                    id={id}
                                  >
                                    Follow
                                  </button>
                                </div>
                              )}
                            </>
                          ) : null}
                        </>
                      )}
                    </>
                  ) : (
                    <p>if is not in friend list what to do</p>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-row my-5 h-5/6">
          <div className="w-5/6 h-5/6 ">
            {userDetailState ? (
              <div className="flex flex-row justify-center">
                <div className="flex flex-col">
                  <div className="my-7 mr-20 rounded bg-blue-300 p-3">
                    <p className="text-white text-center">Username</p>
                  </div>
                  <div className="my-7 mr-20 rounded bg-blue-300 p-3">
                    <p className="text-white text-center">First Name</p>
                  </div>
                  <div className="my-7 mr-20 rounded bg-blue-300 p-3">
                    <p className="text-white text-center">Last Name</p>
                  </div>
                  <div className="my-7 mr-20 rounded bg-blue-300 p-3">
                    <p className="text-white text-center">Email</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="my-7 p-3 hover:bg-gray-900 transition duration-500 ease-in-out rounded">
                    <p className="text-white text-center">
                      {userDetailState[0].user_id_profile.username}
                    </p>
                  </div>
                  <div className="my-7 p-3 hover:bg-gray-900 transition duration-500 ease-in-out rounded">
                    <p className="text-white text-center">
                      {userDetailState[0].user_id_profile.first_name}
                    </p>
                  </div>
                  <div className="my-7 p-3 hover:bg-gray-900 transition duration-500 ease-in-out rounded">
                    <p className="text-white text-center">
                      {userDetailState[0].user_id_profile.last_name}
                    </p>
                  </div>
                  <div className="my-7 p-3 hover:bg-gray-900 transition duration-500 ease-in-out rounded">
                    <p className="text-white text-center">
                      {userDetailState[0].user_id_profile.email}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex mt-32 justify-center animate-spin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className=" w-5/6 h-5/6 bg-indigo-300 rounded">
            <div className="flex flex-wrap justify-around">
              {userDetailState ? (
                userDetailState.map((profile) => {
                  return (
                    <button
                      className="w-2/5 h-full bg-blue-300 my-5 rounded p-10 hover:bg-indigo-700 transition duration-500 ease-in-out"
                      onClick={clickProfile}
                      id={profile.profile_id}
                      key={profile.profile_id}
                    >
                      <p className="text-center">{profile.profile_name}</p>
                    </button>
                  )
                })
              ) : (
                <div className="flex flex-col mt-32 justify-center animate-spin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAcc
