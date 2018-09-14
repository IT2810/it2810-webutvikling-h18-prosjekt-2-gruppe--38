import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import NavBar from './NavBar'
import Display from './Display'
import MediaSelector from './MediaSelector'

const Wrapper = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`
const FrontPageWrapper = () => {
  return (
    <Wrapper>
      <Title title="Exhibition Name" />
      <NavBar list={['Home', 'News', 'Contact', 'About']} />
      <Display svgElements={[]} />
      <MediaSelector
        elements={[
          {
            name: 'Image',
            categories: ['Abstract', 'Post-modern', 'Absurdist']
          },
          {
            name: 'Text',
            categories: ['Descriptive', 'Short', 'Fluff']
          },
          {
            name: 'Music',
            categories: ['Classical', 'Rock', 'Sounds clips']
          }
        ]}
      />
    </Wrapper>
  )
}

export default FrontPageWrapper
