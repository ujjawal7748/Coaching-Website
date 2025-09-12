import React, { Children } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

const MainLayout = ({ children }) => {
  return (
    <>
    <main>
        {children}
      </main>
    <Footer/>
    </>
  )
}

export default MainLayout