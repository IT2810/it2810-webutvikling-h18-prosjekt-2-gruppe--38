import React, { Component } from 'react'
import styled, { consolidateStreamedStyles } from 'styled-components'
import Title from './Title'
import NavBar from './NavBar'
import Display from './Display'
import MediaSelector from './MediaSelector'
import axios from 'axios'

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
  async getPoems (dir) {
    try {
      let l = await axios.get('/poems/' + dir.toLowerCase() + '.json')
      return l.data
    } catch (error) {
      console.log(error)
    }
  }
  generateTabs () {
    let imgArray = []
    let imgDir = [] // Denne skal sendes videre
    let poemArray = []
    let soundArray = []

    for (let i = 0; i < 4; i++) {
      imgArray.push('/images/' + this.state.selectedStateMS.Image.substr(0, 1).toLowerCase() + (i + 1) + '.svg')
    }

    for (let i = 0; i < 4; i++) {
      let randomNum = Math.floor((Math.random() * (imgArray.length - 1)))
      imgDir.push((imgArray.splice(randomNum, 1))[0])
    }

    let f = '/sound/' + this.state.selectedStateMS['Audio Clips'].toLowerCase() + '/'
    for (let i = 1; i < 5; i++) {
      soundArray.push(f + i + '.mp3')
    }

    this.getPoems(this.state.selectedStateMS.Poems)
      .then(res => {
        for (let i = 1; i < 5; i++) {
          poemArray.push(res[i])
        }

        let mediaObject = {}
        let mapArray = ['One', 'Two', 'Three', 'Four']
        for (let i = 0; i < 4; i++) {
          mediaObject[mapArray[i]] = [imgDir[i], poemArray[i], soundArray[i]]
        }

        this.setState({ tabObj: mediaObject }, function () {
          console.log(this.state.tabObj)
        })
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
