import React, { Component } from 'react'
import styled from 'styled-components'
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
  async getPoems (dir) {
    try {
      let l = await axios.get('/poems/' + dir.toLowerCase() + '.json')
      return l.data
    } catch (error) {
      console.log(error)
    }
  }
  generateTabs () {
    let imgArray = ['One', 'Two', 'Three', 'Four']
    let imgDir = [] // Denne skal sendes videre
    const l = imgArray.length
    let poemArray = []
    let soundArray = []
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
