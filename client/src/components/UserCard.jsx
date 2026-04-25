import { MapPin, MessageCircle, Plus, UserPlus } from 'lucide-react'
import { dummyUserData } from '../assets/assets'
import React from 'react'

const UserCard = ({user}) => {

    //declare some variable for the webpage to operate properly
    const currentUser=dummyUserData
    //logic that handles the following people feature
    const handleFollow = async ()=>{

    }
    
    //logic that handles the connection request feature
    const handleConnectionRequest = async ()=>{

    }
  return (
    <div key={user._id} className='p-2 pt-6 flex flex-col justify-between w-full ml-2 sm:w-72 shadow rounded-3xl'>
        <div className='text-center'>
            <img src={user.profile_picture} className='rounded-full w-16 shadow-md mx-auto' alt="" />
            <p className='mt-5 font-semibold'>{user.full_name}</p>
            {user.username && <p className='text-gray-400 text-sm'>@{user.username}</p>}
            {user.bio && <p className='text-gray-600 mt-2 text-center text-sm px-4'>{user.bio}</p>}
        </div>

        {/* This div is going to contain the CTA buttons for the user */}
        <div className='flex items-center justify-center gap-2 mt-4 text-xs text-gray-600' >
            <div className='flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1' >
                <MapPin className='w-4 h-4' /> {user.location}
            </div>

            <div className='flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1' >
                <span>{user.followers.length}</span> Followers
            </div>
        </div>

        {/* CTA Buttons for the UserCard in the search bar option */}
        <div className='flex mt-4 gap-2'>
            {/* Follow button goes here */}
            <button onClick={handleFollow} disabled={currentUser?.following.includes(user._id)} className='w-full py-2 rounded-3xl flex justify-center items-center gap-2 bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition text-white cursor-pointer'>
                {/* UserPlus icon along with the function to check if the user is following them or not */}
                <UserPlus className='w-4 h-4'/> {currentUser?.following.includes(user._id)? 'Following': 'Follow'}
            </button>
            
            {/* Connection Request button goes here */}
            <button onClick={handleConnectionRequest} className='flex items-center justify-center w-16 border text-slate-500 group rounded-3xl cursor-pointer active:scale-95 transition' >
                {
                    currentUser?.connections.includes(user._id) ? <MessageCircle className='w-5 h-5 group-hover:scale-105 transition' /> : <Plus className='w-5 h-5 group-hover:scale-105 transition' />
                }
            </button>
        </div>
    </div>
  )
}

export default UserCard