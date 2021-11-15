import React from 'react'
import { useNavigate } from 'react-router'

// import api call of the blog post
import getBlog from '../../api/Blog_Post/getBlog'

/*
Home what do I want to have?
- profile section 
- all the blog post 
- edit profile section 
*/

/*
- getting information of the api 
*/
function Home() {
  const navigate = useNavigate()
  let [blogState, setBlogState] = React.useState()

  // button to get into full article
  function fullPostButton() {
    navigate('/login')
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

  return (
    // content of the post
    <>
      <div className="container mx-auto my-5 p-4 flex flex-col justify-around">
        {blogState ? (
          blogState.map((data) => {
            return (
              <>
                <div
                  className="my-6 p-3 rounded hover:bg-gray-800 transition duration-500 ease-in-out"
                  key={data.post_id}
                >
                  <div className="flex flex-row justify-evenly">
                    <div className="flex flex-col justify-around w-1/2 ">
                      <div className="my-3">
                        <p>{data.profile_id.profile_id}</p>
                      </div>
                      <div>
                        <img
                          className="object-contain h-9/12 w-9/12 md:object-scale-down rounded"
                          src={data.image_url}
                        />
                      </div>
                    </div>
                    <div className="relative flex flex-col h-5/12 w-7/12 pt-36 rounded hover:bg-indigo-300  transition duration-500 ease-in-out">
                      <p className="text-center text-white truncate ">
                        {data.post_description}
                      </p>
                      <button
                        className="absolute bottom-5 right-5"
                        onClick={fullPostButton}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-9 w-9 hover:w-10"
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
              </>
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
