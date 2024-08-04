import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar,Footer } from './components'
import { useSelector } from 'react-redux'



function Layout() {
  const authStatus = useSelector((state)=>state.auth.status)
  return (
    <>
    {authStatus?(<Outlet/>):(<><Navbar/>
    <Outlet/>
    <Footer/></>)}

    </>

  )
}

export default Layout