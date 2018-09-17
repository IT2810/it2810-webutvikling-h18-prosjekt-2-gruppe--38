import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import NavBar from './NavBar'
import Display from './Display'
import MediaSelector from './MediaSelector'
import data from '../Assets/poems.json'

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
            name: 'Images',
            categories: ['Abstract', 'Post-modern', 'Absurdist']
          },
          {
            name: 'Poems',
            categories: ['War', 'Philosophy', 'Flowers']
          },
          {
            name: 'Audio Clips',
            categories: ['Animals', 'Instruments', 'People']
          }
        ]}
      />
    </Wrapper>
  )
}

export default FrontPageWrapper
