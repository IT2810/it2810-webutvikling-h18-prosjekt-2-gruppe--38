import React from 'react'
// import styled from 'styled-components'
import NavBar from './NavBar'

const FrontPageWrapper = () => {
  return (
    <div>
      <NavBar list={['Home', 'News', 'Contact', 'About']}> </NavBar>
    </div>
  )
}

export default FrontPageWrapper
