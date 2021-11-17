import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

// import api call of the blog post
import getBlog from '../../api/Blog_Post/getBlog'

/*
Home what do I want to have?
- profile section 
- all the blog post 
- edit profile section 
*/

/*
- clicking the post and going into the post it self
*/
function Home() {
  const navigate = useNavigate()
  let [blogState, setBlogState] = React.useState()

  // button to get into full article
  function fullPostButton(e) {
    navigate(`/user/${e.target.id}/`)
  }

  // initiate the calling of the api
  async function gettingBlogPost() {
    try {
      const data = await getBlog()
      setBlogState(data.data)
    } catch (err) {
      console.log('Getting Blog Post error: ', err)
    }
  }

  // calling the function
  React.useEffect(() => {
    gettingBlogPost()
  }, [])
  console.log(blogState)
  return (
    // content of the post
    <>
      <div className="container mx-auto my-5 p-4 flex flex-col justify-around">
        {blogState ? (
          blogState.map((data) => {
            return (
              <div key={data.post_id}>
                <div className="my-6 p-3 rounded border-2 border-light-blue-500 border-opacity-50 hover:bg-gray-800 transition duration-500 ease-in-out">
                  <div className="flex flex-row justify-evenly ">
                    <div className="flex flex-col justify-around w-1/2 ">
                      <div className="my-2 flex flex-row">
                        <div className="rounded-full h-16 w-16 mt-3 ml-3 bg-gray-900">
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
                        <div className="flex justify-center items-center m-4">
                          {/* Visiting friend profile */}
                          <Link
                            to={`/user/profile/${data.profile_id.profile_id}/`}
                          >
                            <p className="text-center text-white">
                              {data.profile_id.profile_name}
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <img
                          className="object-contain h-9/12 w-9/12 md:object-scale-down rounded"
                          src={data.image_url}
                        />
                      </div>
                    </div>
                    <div className="relative flex flex-col h-5/12 w-7/12 justify-center items-center  rounded  transform hover:scale-110 transition duration-500 ease-in-out">
                      <p className="text-center text-white truncate">
                        {data.post_description}
                      </p>
                      <button
                        className="absolute bottom-5 right-5"
                        onClick={fullPostButton}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-9 w-9 hover:w-10"
                          onClick={fullPostButton}
                          id={data.post_id}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
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
    </>
  )
}

export default Home
