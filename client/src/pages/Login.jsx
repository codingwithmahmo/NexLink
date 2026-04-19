import { Star } from 'lucide-react'
import { assets } from '../assets/assets'
import React from 'react'
import { SignIn } from '@clerk/react'

const Login = () => {
  return (
    <div className='relative min-h-screen flex flex-col md:flex-row'>
      {/* Left side with image and text */}
      <img src={assets.bgImage} alt="Background" className='absolute top-0 left-0 -z-10 w-full h-full object-cover' />

      {/* left side: branding */}
      <div className='flex-1 flex flex-col items-start justify-center pt-10 pb-20 px-8 md:pt-20 md:pb-10 md:px-12 lg:pl-32 lg:pr-8'>
        <img src={assets.logo} alt="NexLink Logo" className='h-35 md:h-35 object-contain absolute top-8 md:top-0 left-10 md:left-12 lg:left-32' />
        <div className='flex flex-col items-start gap-3 ml-2 w-100'>
          <div className='flex items-center gap-3 mt-30 '>
            <img src={assets.group_users} alt="UserGroup" className='h-10 md:h-10' />
            <div>
              {/* here we added the stars rating for the LOGIN page */}
              <div className='flex gap-0.5'>
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={16} className='size-5 md:size-5 text-transparent fill-amber-500' />
                ))}
              </div>
              <p className='text-sm md:text-sm mt-1'>Used by 12k+ developers</p>
            </div>
          </div>
            <h1 className='text-4xl md:text-5xl lg:text-4xl font-bold  bg-linear-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent'>More than just friends, truly connect</h1>
            <p className='text-base md:text-base text-indigo-900 mt-0'>connect with global community on pingup</p>
        </div>
        <span className='md:h-10'></span>
      </div>
      {/* Right Side Login Form (Clerk Component) */}
      <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
        <SignIn />
      </div>
    </div>
  )
}

export default Login