import Loading from '../components/Loading'
import {assets, dummyPostsData } from '../assets/assets'
import React, { useEffect, useState } from 'react'
import StoriesBar from '../components/StoriesBar'
import PostCard from '../components/PostCard'
import RecentMessages from '../components/RecentMessages'

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
  useEffect(()=>{fetchFeeds()},[])

  //this checks if the loading state is not true then execute the statement inside
  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      
      {/* Stories & Post List goes here */}
      <div>
        <StoriesBar />
        <div className='p-4 space-y-6'>
          {feeds.map((feed) => (
            <PostCard key={feed.id} post={feed} />
          ))}
        </div>
      </div>

      {/* Right Sidebar Content goes here */}
      <div className='max-xl:hidden sticky top-0'>
        
        {/* Sponsored Content */}
        <div className='max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow'>
          <h3 className='text-slate-800 font-semibold'>Sponsored</h3>
          <img src={assets.sponsored_img} className='w-75 h-50 rounded-2xl' alt="" />
          <p className='text-slate-600'>Email Marketing</p>
          <p className='text-slate-400'>Supercharging your marketing with a powerful,
            easy-to-use platform built for success
          </p>
        </div>

        {/* Recent Messages */}
        <RecentMessages />
      </div>
    </div>
  ) : <Loading />
}

export default Feed