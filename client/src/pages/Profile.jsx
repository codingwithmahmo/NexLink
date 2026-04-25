import Loading from '../components/Loading'
import { dummyUserData } from '../assets/assets'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserProfile } from '@clerk/react'
import UserProfileInfo from '../components/UserProfileInfo'

const Profile = () => {

  // add the logic for fetching the user data based on the profileId
  const {profileId} = useParams()
  const [user,setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [activeTab, setActiveTab] = useState('Posts')
  const [showEdit,setShowEdit] = useState(false)

  const fetchUser = async() =>{
    setUser(dummyUserData)
    setPosts(dummyUserData.posts)
  }

  useEffect(()=>{
    fetchUser()
  },[])

  return user ? (
    <div className='relative h-full overflow-y-scroll bg-gray-50 p-6'>
      <div className='max-w-3xl mx-auto'>
        
        {/* Profile Card */}
        <div className='bg-white rounded-3xl shadow overflow-hidden'>
          {/* Cover Photo */}
          <div className='h-40 md:h-56 bg-linear-to-r from-indigo-500 via-purple-600 to-indigo-700'>
            {user.cover_photo && <img src={user.cover_photo} alt='' className='w-full h-full object-cover' />}
          </div>

          {/* User Info goes here */}
          <UserProfileInfo user={user} posts={posts} profileId={profileId} setShowEdit={setShowEdit} />

        </div>
      </div>
    </div>
  ) : (<Loading />)
}

export default Profile