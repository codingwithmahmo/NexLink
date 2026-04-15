import React from 'react'
import { Routes } from 'react-router-dom'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Messages from './pages/Messages'

const App = () => {
  return (
    <>
    /** The App component serves as the main entry point for the application. */
      <Routes>
        <Route path="/" element={<Login />} />
          <Route index element={<Feed />} />
          <Route path='messages' element={<Messages />} />  
      </Routes>
    </>
  )
}

export default App