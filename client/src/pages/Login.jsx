import { Star } from 'lucide-react'
import { assets } from '../assets/assets'
import React from 'react'

const Login = () => {
  return (
    <div className='relative min-h-screen flex flex-col md:flex-row'>
      {/* Left side with image and text */}
      <img src={assets.bgImage} alt="Background" className='absolute top-0 left-0 -z-10 w-full h-full object-cover' />

      {/* left side: branding */}
      <div className='flex-1 flex flex-col items-start justify-between pt-12 pb-16 px-8 md:pt-16 md:pb-20 md:px-12 lg:pl-32 lg:pr-8'>
        <img src={assets.logo} alt="NexLink Logo" className='h-35 md:h-35 object-contain' />
        <div className='flex items-center gap-3'>
          <img src={assets.group_users} alt="UserGroup" className='h-10 md:h-11' />
          <div>
            {/* here we added the stars rating for the LOGIN page */}
            <div className='flex gap-0.5'>
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} size={16} className='size-4 md:size-5 text-transparent fill-amber-500' />
              ))}
            </div>
            <p className='text-sm  md:text-base mt-0.85'>Used by 12k+ developers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login