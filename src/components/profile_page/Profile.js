import React from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'

import getSingleProfile from '../../api/Profile/getSingleProfile'
// get all posts for a profile
import getUserPosts from '../../api/Profile/getPostsProfile'

// get every post from the profile
// need to create an endpoint in the backend to connect with the front end for getting all the post for the single profile
// then we call the endpoint to get the profile information and also getting the profile posts
// then after that we can use to portray the posts

function Profile() {
  const { id } = useParams()
  const navigate = useNavigate()

  //state
  let [profileInfo, setProfileInfo] = React.useState()
  let [profilePosts, setProfilePosts] = React.useState()

  // going to the specific page
  function individualPost(e) {
    console.log(e.target.id)
    navigate(`/user/${e.target.id}/`)
  }

  // calling the api to get single profile
  async function gettingSingleProfileInfo() {
    try {
      const data = await getSingleProfile(id)
      setProfileInfo(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  // getiing profile's posts
  async function gettingProfilePosts() {
    try {
      const data = await getUserPosts(id)
      setProfilePosts(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  // invoking the api call
  React.useEffect(() => {
    gettingSingleProfileInfo()
    gettingProfilePosts()
  }, [])

  console.log(profileInfo)

  return (
    <div className="container mx-auto my-5 p-4 flex flex-col ">
      <div className="flex flex-col h-3/6 bg-indigo-300 rounded">
        {/* This is where profile picture will be put */}
        <div className="rounded-full h-36 w-36 mt-3 ml-3 bg-indigo-700">
          {profileInfo ? (
            <>
              {profileInfo.profile_image_url ? (
                <img src={`${profileInfo.profile_image_url}`} />
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
          ) : null}
        </div>
        <div className="mt-2 ml-8 h-1/6 ">
          {profileInfo ? (
            <Link to={`/user/account/${profileInfo.user_id_profile.id}/`}>
              <h1 className="p-1 ">{profileInfo.user_id_profile.username}</h1>
            </Link>
          ) : (
            <p>loading</p>
          )}
        </div>
        <div className="mt-1 ml-8 h-1/6 ">
          {profileInfo ? (
            <h1 className="p-1 ">{profileInfo.profile_name}</h1>
          ) : (
            <p>loading</p>
          )}
        </div>
        <div className="mt-1 ml-8 h-1/6 ">
          {profileInfo ? (
            <>
              <p className="p-1 ">{profileInfo.description}</p>
            </>
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
      <div className="my-3 flex flex-col rounded">
        <>
          {profilePosts ? (
            profilePosts.map((post) => {
              return (
                <div
                  className="flex flex-row justify-between p-3 rounded transform hover:translate-y-4 hover:bg-gray-800 transition duration-500 ease-in-out"
                  key={post.post_id}
                  onClick={individualPost}
                  id={post.post_id}
                >
                  <div className="flex justify-center" id={post.post_id}>
                    <img
                      src={post.image_url}
                      className="object-contain h-7/12 w-7/12 md:object-scale-down rounded transition duration-500 ease-in-out transform hover:scale-110"
                    />
                  </div>
                  <div
                    id={post.post_id}
                    className="relative flex flex-col justify-center items-center h-5/12 w-7/12 rounded transition duration-500 ease-in-out transform hover:scale-110"
                  >
                    <p className="text-center text-gray-300 ">
                      {post.post_description}
                    </p>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="flex m-auto min-h-screen flex-col justify-center animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
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
        </>
      </div>
    </div>
  )
}

export default Profile
