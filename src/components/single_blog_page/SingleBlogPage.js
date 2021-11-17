import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// importing api call for single post
import getSingleBlog from '../../api/Blog_Post/getSingleBlog'

// getting the post information and and portray it
// calling get single post api to get the information
// and portray it and design it

function SinglePage() {
  const { id } = useParams()
  const navigate = useNavigate()

  let [postInfoState, setPostInfo] = React.useState()

  // calling the api to get single post
  async function gettingSinglePost() {
    try {
      const data = await getSingleBlog(id)
      setPostInfo(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  // going back menu button
  function backMenuButton() {
    navigate('/user/home/')
  }

  React.useEffect(() => {
    gettingSinglePost()
  }, [])

  return (
    <div className="container mx-auto my-5 p-4 flex flex-col ">
      <button onClick={backMenuButton}>
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
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      {postInfoState ? (
        <div>
          <h1 className="text-center my-6 title text-white">
            {postInfoState.title}
          </h1>
          <div className="flex flex-row justify-center my-7">
            <img
              className="object-contain h-8/12 w-8/12 rounded"
              src={postInfoState.image_url}
            />
          </div>
          <div className="flex flex-col justify-center  my-4 ">
            {postInfoState.post_paragraph.split('/n').map((para) => {
              // add /n for line break in this case
              return (
                <div key={para}>
                  <div>
                    <p className="text-white">{para}</p>
                  </div>
                  <br />
                </div>
              )
            })}
          </div>
        </div>
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
  )
}

export default SinglePage
