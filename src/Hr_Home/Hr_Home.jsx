import React from 'react'
import SideBar from '../SideBar/SideBar'
import MainBar from '../MainBar/MainBar'
import "./Hr_Home.css"
import Navbar from '../Navbar/Navbar'

const Hr_Home = () => {
  return (
    <div>
      <Navbar/>
    <section>
        <article>
          
           <SideBar/> 
           <MainBar/>
        </article>
    </section>
    </div>
  )
}

export default Hr_Home
