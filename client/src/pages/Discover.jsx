import { Search } from 'lucide-react'
import { dummyConnectionsData } from '../assets/assets'
import React, { useState } from 'react'
import UserCard from '../components/UserCard'
import Loading from '../components/Loading'

const Discover = () => {

  //create some state variables before going into the UI design
  const [input,setInput]= useState('')
  const [users,setUsers]= useState(dummyConnectionsData)
  const [loading,setLoading]= useState(false)

  //code for handling the search functionality 
  const handleSearch = async (e)=>{
    //if the user clicks enter, import the dummy data, set the loading timer 10ms i.e 1000 = 10ms
    if(e.key === 'Enter'){
      setUsers([])
      setLoading(true)
      setTimeout(()=>{
        setUsers(dummyConnectionsData)
        setLoading(false)
      },1000)
    }
  }
  return (
    <div className='min-h-screen bg-linear-to-b from-slate-50 to-white'>
      <div className='max-w-6xl mx-auto p-6'>
        
        {/* Title */}
        <div>
          <h1 className='text-3xl font-bold text-slate-800 mb-2'>Discover</h1>
          <p className='text-slate-600'>Connect with amazing people and grow your network</p>
        </div>

        {/* Search Bar */}
        <div className='mb-10 mt-5 shadow-md rounded-3xl bg-white/90'>
            <div className='relative'>
              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5' />
              <input type="text" placeholder='Search among 1000+ people now....' className='pl-10 sm:pl-12 py-3 w-full border border-gray-300 rounded-3xl max-sm:text-sm' onChange={(e) => setInput(e.target.value)} value={input} onKeyUp={handleSearch} />
            </div>
        </div>

        {/* This div shall be used to display the user cards when the user searches for an user */}
        <div className='flex flex-wrap gap-6'>
          {users.map((user) => (
            <UserCard user={user} key={user._id} />
          ))}
        </div>

        {
          loading && (<Loading height='60vh' />)
        }
      </div>
    </div>
  )
}

export default Discover