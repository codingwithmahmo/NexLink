import React, { useState } from 'react'
import {Users, UserPlus, UserCheck, UserRoundPen} from 'lucide-react'
import {
  dummyConnectionsData as connections,
  dummyPendingConnectionsData as pendingConnections,
  dummyFollowersData as followers,
  dummyFollowingData as following
} from '../assets/assets'

const Connections = () => {
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

      </div>
    </div>
  )
}

export default Connections