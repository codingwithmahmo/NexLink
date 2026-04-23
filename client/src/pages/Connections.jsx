import React, { useState } from 'react'
import {Users, UserPlus, UserCheck, UserRoundPen, MessageCircle} from 'lucide-react'
import {
  dummyConnectionsData as connections,
  dummyPendingConnectionsData as pendingConnections,
  dummyFollowersData as followers,
  dummyFollowingData as following
} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Connections = () => {
  const navigate = useNavigate()
  const [currentTab, setCurrentTab] = useState('Followers')

  const dataArray= [
    {label: 'Followers', value: followers, Icon: Users},
    {label: 'Following', value: following, Icon: UserCheck},
    {label: 'Connections', value: connections, Icon: UserPlus},
    {label: 'Pending Requests', value: pendingConnections, Icon: UserRoundPen}
  ]
  return (
    <div className='min-h-screen bg-slate-50'>
      <div className='max-w-6xl mx-auto p-6'>
        
        {/* Title */}
        <div>
          <h1 className='text-3xl font-bold text-slate-800 mb-2'>Connections</h1>
          <p className='text-slate-600'>Manage your network and discover new connections</p>
        </div>

        {/* Counts here */}
        <div className='mb-8  mt-5 ml-4  flex flex-wrap gap-6'>
          {dataArray.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center gap-0.5 border h-20 w-40 border-gray-200 bg-white shadow rounded-2xl'>
              <b>{item.value.length}</b>
              <p className='text-slate-600'>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs Code goes here */}
        <div className='inline-flex ml-3 flex-wrap items-center border border-gray-200 rounded-3xl bg-white shadow-md'>
          {
            dataArray.map((tab) => (
              <button onClick={() => setCurrentTab(tab.label)} key={tab.label} className={`flex items-center px-3 py-3 text-sm rounded-2xl transition-colors cursor-pointer ${currentTab === tab.label ? 'bg-white font-medium text-black' : 'text-gray-500 hover:text-black'}`}>
                <tab.Icon className='w-4 h-4' />
                <span className='ml-1'>{tab.label}</span>
              </button>
            ))
          }
        </div>

        {/* Connections Content goes here */}
        <div className='flex flex-wrap gap-6 mt-7 ml-3'>
          {dataArray.find((item)=>item.label === currentTab).value.map((user)=>(
            <div key={user._id} className='w-full max-w-88 flex gap-5 p-6 bg-white shadow rounded-3xl'>
              <img src={user.profile_picture} className='rounded-full w-12 h-12 shadow-md mx-auto' alt="" />
              <div className='flex-1'>
                <p className='text-slate-700 font-medium'>{user.full_name}</p>
                <p className='text-slate-400 text-sm'>@{user.username}</p>
                <p className='text-gray-600 text-sm'>{user.bio.slice(0,30)}...</p>
              <div className='flex max-sm:flex-col gap-2 mt-4'>
                {
                  <button onClick={()=> navigate(`/profile/${user._id}`)} className='w-full p-2 rounded-3xl bg-linear-to-r from-indigo-500 to-purple-700 hover:to-purple-700 active:scale-95 text-white cursor-pointer'>
                    View Profile
                  </button>
                }
                
                {
                  currentTab === 'Following' && (
                    <button className='w-full p-2 text-sm rounded-3xl bg-slate-100 hover:bg-slate-300 text-black active:scale-95 transition cursor-pointer'>
                      Unfollow
                    </button>
                  )
                }

                {
                  currentTab === 'Pending' && (
                    <button className='w-full p-2 text-sm rounded-3xl bg-slate-100 hover:bg-slate-300 text-black active:scale-95 transition cursor-pointer'>
                      Accept
                    </button>
                  )
                }

                {
                  currentTab === 'Connections' && (
                    <button className='w-full p-2 text-sm rounded-3xl bg-slate-100 hover:bg-slate-300 text-black active:scale-95 transition cursor-pointer flex items-center justify-center gap-1'>
                      <MessageCircle className='w-4 h-4' />
                      Message
                    </button>
                  )
                }
              </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Connections