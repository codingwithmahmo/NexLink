import React from 'react'

const Loading = ({height= '100vh'}) => {
  return (
    <div style={{ height }} className='flex items-center justify-center w-full'>
        <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' />
    </div>
  )
}

export default Loading