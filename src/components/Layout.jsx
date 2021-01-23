import * as React from 'react'
import Navigation from './Navigation'
import SEO from './SEO'

const Layout = ({ children, customSEO }) => {
  return (
    <>
      {!customSEO && <SEO />}
      <Navigation />
      {children}
    </>
  )
}

export default Layout
