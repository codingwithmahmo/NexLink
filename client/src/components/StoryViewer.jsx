//ReactJS Code for the part where the User can view other's story as well
import { BadgeCheck, X } from 'lucide-react'
import React from 'react'

const StoryViewer = ({viewStory, setViewStory}) => {
  return (
    <div className='fixed inset-0 h-screen bg-black bg-opacity-90 z-110 flex items-center justify-center' style={{backgroundColor: viewStory.media_type === 'text'? viewStory.background_color:'#000000'}}>
        
        {/* Progress Bar code comes here */}
        <div className='absolute top-0 left-0 w-full h-1 bg-gray-700'>
            <div className='h-full bg-white transition-all duration-100 linear' style={{width: '50%'}}>

            </div>
        </div>
        {/* User Info - Top left (code here) */}
        <div className='absolute text-white top-4 left-4 flex items-center gap-3 p-2 px-5 sm:p-4 sm:px-8 backdrop-blur-2xl rounded-4xl'>
            <img src={viewStory.user?.profile_picture} alt="" className='size-10 sm:size-10 rounded-full object-cover border border-white' />
            <div className='flex items-center gap-1 whitespace-nowrap'>
                <span>{viewStory.user?.full_name}</span>
                <BadgeCheck size={18} className='w-5 text-white' />
            </div>
        </div>
        {/* Close button for closing story */}
        <button onClick={() => setViewStory(null)} className='absolute top-7 right-4 text-white text-3xl font-bold focus:outline-none' >
            <X className='w-8 h-8 hover:scale-110 transition cursor-pointer text-white' />
        </button>
    </div>
  )
}

export default StoryViewer