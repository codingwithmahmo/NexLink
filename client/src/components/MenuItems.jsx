import { NavLink } from 'react-router-dom'
import { menuItemsData } from '../assets/assets'
import React from 'react'

const MenuItems = ({setSidebarOpen}) => {
  return (
    <div className='px-3 text-gray-600 space-y-1 font-medium'>
        {
            menuItemsData.map(({to, label,Icon}) => (
                <NavLink key={to} to={to} end={to === '/'} onClick={()=> setSidebarOpen(false)} className={({isActive}) => `px-2 py-2 w-50 flex items-center gap-1 rounded-xl ${isActive ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`}>
                      <Icon className='w-10 h-5' />
                      {label}
                </NavLink>
            ))
        }
    </div>
  )
}

export default MenuItems