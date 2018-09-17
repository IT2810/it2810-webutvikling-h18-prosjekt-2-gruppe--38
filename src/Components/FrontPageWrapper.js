import React, { Component } from 'react'
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
export default class FrontPageWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = { imgDir: '' }
    this.transferString = this.transferString.bind(this)
  }
  transferString (imageDirectory) {
    console.log(imageDirectory + ' DETTE FUNKET')
    this.setState({ imgDir: imageDirectory }, function () {
      console.log(this.state.imgDir)
    })
  }
  render () {
    return (
      <Wrapper>
        <Title title="Exhibition Name" />
        <NavBar list={['Home', 'News', 'Contact', 'About']} />
        <Display svgElements={[]} dir={this.state.imgDir}/>
        <MediaSelector
          elements={[
            {
              name: 'Image',
              categories: ['Insects', 'Fish', 'Cats']
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

          myFunc1 = {this.transferString}

        />
      </Wrapper>
    )
  }
}
