import React from 'react'

import getUserDetails from '../../api/Profile/userAcc'
// this part is to have settings
// need to able to see all the profiles you have
// able to change things
function UserAcc() {
  let [userDetailState, setUserDetails] = React.useState()

  // getting user detail from api
  async function gettingUserDetails() {
    try {
      const data = await getUserDetails()
      setUserDetails(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    gettingUserDetails()
  }, [])

  console.log(userDetailState)
  return (
    <div className="container mx-auto my-5 p-4 flex flex-col">
      {/* profile image and background image or design */}
      <div>
        <div className="flex flex-col">
          <div className="h-5/6 bg-indigo-300 p-3">
            <div className="rounded-full h-1/6 w-1/6 bg-indigo-700 ">
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
                  <div className="my-7 p-3">
                    <p className="text-white text-center">
                      {userDetailState[0].user_id_profile.username}
                    </p>
                  </div>
                  <div className="my-7 p-3">
                    <p className="text-white text-center">
                      {userDetailState[0].user_id_profile.first_name}
                    </p>
                  </div>
                  <div className="my-7 p-3">
                    <p className="text-white text-center">
                      {userDetailState[0].user_id_profile.last_name}
                    </p>
                  </div>
                  <div className="my-7 p-3">
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
                    <div className="w-2/5 h-full bg-blue-300 my-5 rounded p-10">
                      <p>hello</p>
                    </div>
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
      {/* user details */}
      {/* profiles */}
      <div></div>
    </div>
  )
}

export default UserAcc
