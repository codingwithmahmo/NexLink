import Loading from '../components/Loading'
import {dummyPostsData } from '../assets/assets'
import React, { useEffect, useState } from 'react'

const Feed = () => {
  //use state Functions for both feeds and loading state
  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(true)

  //asynchornous function to fetch the feeds data from the dummy data and set it to the feeds state
  const fetchFeeds = async () => {
    // set the loading state while it fetches the dummy feed data
    setLoading(true)

    // Set timer function here so that it runs for 9ms when the page is refreshed
    await new Promise((resolve) => setTimeout(resolve, 900))

    //fetches the data from the dummy data and sets it to the feeds state
    setFeeds(dummyPostsData)

    // close the loading state after fetching the data
    setLoading(false)
  }

  //use effect for fetching the feeds data when the component mounts and also when the page is refreshed
  useEffect(() => {
    fetchFeeds()
  }, [])

  //this checks if the loading state is not true then execute the statement inside
  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      {/* Stories & Post List goes here */}
      <div>
        <h1>Stories here</h1>
        <div className='p-4 space-y-6'>
          
        </div>
      </div>
      {/* Right Sidebar Content goes here */}
    </div>
  ) : <Loading />
}

export default Feed