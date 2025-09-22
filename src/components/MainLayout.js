import React, { Children } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

const MainLayout = ({children}) => {
  return (
    <>
    <Navigation/>
    {children}
    <Footer/>
    </>
  )
}

export default MainLayout