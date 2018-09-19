import React, { Component } from 'react'
import styled, { consolidateStreamedStyles } from 'styled-components'
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
      sendObj: [],
      selectedStateMS: { } }
    this.transferState = this.transferState.bind(this)
    this.sendClick = this.sendClick.bind(this)
  }
  transferState (stateFromMediaSelector) { // Fired from the child component, MediaSelector.
    let sel = stateFromMediaSelector
    this.setState({ selectedStateMS: sel }, function () {
      this.checkIfAllThreeSelected()
    })
  }

  checkIfAllThreeSelected () {
    let obj = this.state.selectedStateMS

    if (this.objectLength(obj) === 3) {
      this.generateTabs()
    }
  }

  objectLength (object) {
    var keys = []
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key)
      }
    }
    return keys.length
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

  sendClick (stringKeyFromNavBar) {
    if (this.objectLength(this.state.tabObj) === 0) {
      window.alert('You need to select three categories')
    } else {
      let s = this.state.tabObj[stringKeyFromNavBar]
      this.setState({ sendObj: s })
    }
  }
  render () {
    return (
      <Wrapper>
        <Title title="Exhibition Name" />
        <NavBar list={['One', 'Two', 'Three', 'Four']} sendClickToFPW = {this.sendClick} />
        <Display svgElements={[]} dir={this.state.imgDir} dispObject = {this.state.sendObj} />
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
