import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import MenuItems from './MenuItems'

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
    const navigate = useNavigate()

    return (
    <div className={'w-59 xl:w-60 bg-white border-r border-gray-200 flex flex-col justify-start items-start pt-1 max-sm:absolute top-0 bottom-0 z-20 ' + (sidebarOpen ? 'translate-x-0' : 'max-sm:-translate-x-full') + ' transition-all duration-300 ease-in-out'}>
      <div className='w-full px-6 py-2'>
        <img onClick={() => navigate('/')} src={assets.logo} className='w-35 -my-8 cursor-pointer' alt="" />
      </div>
      <hr className='w-full border-gray-300 mb-6' />

        <MenuItems setSidebarOpen={setSidebarOpen} />
    </div>
  )
}

export default SideBar