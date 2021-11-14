import React from 'react'

// import api call of the blog post
import getBlog from '../../api/Blog_Post/getBlog'
import getToken from '../../api/Auth_Token/getToken'

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
  let [blogState, setBlogState] = React.useState()

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
    <div className="container mx-auto bg-green-400 my-10 p-10 rounded-md flex">
      <h1 className="text-center">Content of the posts</h1>
    </div>
  )
}

export default Home
