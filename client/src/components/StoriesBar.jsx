//ReactJS file for the StoriesBar Component which will display the stories like it does on instagram
import { Plus } from 'lucide-react'
import { dummyStoriesData } from '../assets/assets'
import React from 'react'
import {useState, useEffect} from 'react'
import moment from 'moment'

const StoriesBar = () => {

    const [stories, setStories] = useState([])
    const fetchStories = async()=> {setStories(dummyStoriesData)}

    useEffect(() => {fetchStories()},[])
    return (
        <div className='w-screen sm-w-[calc(100vw-240px)] md:px-2 lg:max-w-2xl no-scrollbar overflow-x-auto px-5' >
            <div className='flex gap-4 pb-5'>

                {/*Story cards content goes here*/}
                <div className='rounded-2xl shadow-sm min-w-30 max-w-50 max-h-50 aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed border-indigo-800 bg-gradient-to-b from-indigo-50 to-white'>
                    <div className='h-full flex flex-col items-center justify-center p-4'>
                        <div className='size-10 bg-indigo-800 rounded-full flex items-center justify-center mb-3'>
                            <Plus className='w-5 h-5 text-white' />
                        </div>
                        <p className='text-sm font-medium text-slate-700 text-center'>Create Story</p>
                    </div>
                </div>

                {/* Story cards list goes here */}
                {
                    stories.map((story, index) => (
                        <div key={index} className={`relative rounded-2xl shadow min-w-30 max-w-30 max-h-40 cursor-pointer hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-800 active:scale-95`}>
                            <img src={story.user.profile_picture} className='absolute size-8 top-3 left-3 z-10 rounded-full ring ring-gray-100 shadow' alt="" />
                            <p className='absolute top-18 left-3 text-white/60 text-sm truncate max-w-24' >{story.content}</p>
                            <p className='text-white absolute bottom-1 right-2 z-10 text-xs'>{moment(story.createdAt).fromNow()}</p>
                            {
                                story.media_type !== 'text' && (
                                    <div className='absolute inset-0 z-1 rounded-2xl bg-black overflow-hidden'>                                       
                                        {story.media_type === 'image' ? (
                                            <img src={story.media_url} alt="" className='h-full w-full object-cover hover:scale-130 transition duration-600 opacity-70 hover:opacity-80' />
                                        ) : (
                                            <video src={story.media_url} className='h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80' />
                                        )}
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StoriesBar