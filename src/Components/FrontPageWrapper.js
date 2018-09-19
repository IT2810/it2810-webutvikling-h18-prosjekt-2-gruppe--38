import React, { Component } from 'react'
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
export default class FrontPageWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = { imgDir: '',
      tabObj: {},
      selectedStateMS: { } }
    this.transferState = this.transferState.bind(this)
  }
  transferState (stateFromMediaSelector) { // Fired from the child component, MediaSelector.
    let sel = stateFromMediaSelector
    this.setState({ selectedStateMS: sel }, function () {
      this.checkIfAllThreeSelected()
    })
  }

  checkIfAllThreeSelected () {
    let obj = this.state.selectedStateMS
    var keys = []
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key)
      }
    }
    if (keys.length === 3) {
      this.generateTabs()
    }
  }
  generateTabs () {
    let imgArray = ['One', 'Two', 'Three', 'Four']
    let imgDir = [] // Denne skal sendes videre
    const l = imgArray.length
    switch (this.state.selectedStateMS.Image) {
      case 'Insects':
        for (let i = 0; i < l; i++) {
          imgArray[i] = `/images/i${(i + 1).toString()}.svg`
        }
        break
      case 'Fish':
        for (let i = 0; i < l; i++) {
          imgArray[i] = `/images/f${(i + 1).toString()}.svg`
        }
        break
      case 'Cats':
        for (let i = 0; i < l; i++) {
          imgArray[i] = `/images/c${(i + 1).toString()}.svg`
        }
        break
    }

    for (let i = 0; i < l; i++) {
      let randomNum = Math.floor((Math.random() * (imgArray.length - 1)))
      imgDir.push((imgArray.splice(randomNum, 1))[0])
    }
    let mediaObject = {
      'One': [imgDir[0], '', ''],
      'Two': [imgDir[1], '', ''],
      'Three': [imgDir[2], '', ''],
      'Four': [imgDir[3], '', '']
    }

    this.setState({ tabObj: mediaObject }, function () {
      console.log(this.state.tabObj)
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

          myFunc1 = {this.transferState}

        />
      </Wrapper>
    )
  }
}
