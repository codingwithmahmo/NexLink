import React from 'react'
import {Users, UserPlus, UserCheck, UserRoundPen, MessageCircle} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {
  dummyConnectionsData as connections,
  dummyPendingConnectionsData as pendingConnections,
  dummyFollowersData as followers,
  dummyFollowingData as following
} from '../assets/assets'

const Connections = () => {
  const navigate = useNavigate()

  const dataArray= [
    {label: 'Followers',value:followers, icon: <Users className='w-4 h-4' />},
    {label: 'Following',value:following, icon: <UserCheck className='w-4 h-4' />},
    {label: 'Connections',value:connections, icon: <UserPlus className='w-4 h-4' />},
    {label: 'Pending Connections',value:pendingConnections, icon: <UserRoundPen className='w-4 h-4' />}
  ]
  return (
    <div className='min-h-scren bg-slate-50'>
      <div className='max-w-6xl mx-auto p-6'>
        
        {/* Title */}
        <div>
          <h1 className='text-3xl font-bold text-slate-800 mb-2'>Connections</h1>
          <p className='text-slate-600'>Manage your network and discover new connections</p>
        </div>

        {/* Connections List Goes here */}

      </div>
    </div>
  )
}

export default Connections