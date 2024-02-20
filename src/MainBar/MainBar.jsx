import React from 'react'
import { Outlet } from 'react-router-dom'
import "./MainBar.css"

const MainBar = () => {
  return (
    <div className='mainbar'>
      <Outlet/>
    </div>
  )
}

export default MainBar
