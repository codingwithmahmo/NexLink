import { EyeIcon, MessageCircle } from 'lucide-react'
import { dummyConnectionsData } from '../assets/assets'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Messages = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen relative bg-slate-50'>
      <div className='max-w-6xl mx-auto p-6'>
        {/* Title */}
        <div>
          <h1 className='text-3xl font-bold text-slate-800 mb-2'>Messages</h1>
          <p className='text-slate-600'>Talk to your friends & family</p>
        </div>

        {/* Connected Users Goes here */}
        <div className='flex flex-col gap-4 mt-6 ml-3'>
          {dummyConnectionsData.map((user)=>(
            <div className='max-w-xl flex flex-warp gap-4 p-5 cursor-pointer shadow rounded-3xl'>
              <img src={user.profile_picture} alt="" className='rounded-full size-12  mx-1' />
              <div className='flex-1'>
                <p className='font-medium'>{user.full_name}</p>
                <p className='text-sm text-slate-600'>@{user.username}</p>
                <p className='mt-2 text-sm'>{user.bio}</p>
              </div>
              
              <div className='flex flex-col gap-2 mt-4'>
                <button onClick={() => navigate(`/messages/${user._id}`)} className='size-10 flex items-center justify-center text-sm rounded-3xl bg-slate-200 hover:bg-slate-900 text-purple-700 active:scale-95 transition cursor-pointer'>
                  <MessageCircle className='w-4 h-4' />
                </button>

                <button onClick={() => navigate(`/profile/${user._id}`)} className='size-10 flex items-center justify-center text-sm rounded-3xl bg-slate-200 hover:bg-slate-900 text-purple-700 active:scale-95 transition cursor-pointer'>
                  <EyeIcon className='w-4 h-4' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Messages