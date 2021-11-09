import React from 'react'
import axios from 'axios'

async function getAllUser() {
  const { data } = await axios.get('http://127.0.0.1:8000/post/')
  console.log(data)
  return data
}

function Home() {
  let [state, setState] = React.useState([])

  async function APIcalltogetUser() {
    try {
      const data = await getAllUser()
      setState([data])
    } catch (err) {
      console.error('There is error', err)
    }
  }

  React.useEffect(() => {
    APIcalltogetUser()
  }, [])
  console.log(state)
  return (
    <>
      {state.length !== 0 ? (
        <p>This is all working</p>
      ) : (
        <p>there is nothing</p>
      )}
    </>
  )
}

export default Home
