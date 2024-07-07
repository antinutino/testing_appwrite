import React from 'react'
import Navber from '../navber/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

function Home() {
  return (
   <div>
    <Navber></Navber>
    <Outlet></Outlet>
    <Footer></Footer>
   </div>
  )
}

export default Home