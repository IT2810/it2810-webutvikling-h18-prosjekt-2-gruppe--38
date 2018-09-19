import React, { Component } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import PropTypes from 'prop-types'
import axios from 'axios'

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 30% 0 30%;
  margin: auto;
  height: auto;
  text-align: center;
  box-sizing: border-box;

  @media screen and (max-width: 700px) {
      flex-direction: column;
      padding: 0 10% 0 10%;
    }
  
  @media screen and (max-width: 1200px) {
    padding: 0 22% 0 22%;
  }
`

export default class MediaSelector extends Component {
  constructor (props) {
    super(props)
    this.state = { selectedState: { }
    }

    this.updateState = this.updateState.bind(this)
  }

  updateState (DDstate, obj) {
    let name = obj.props.name
    let dropdownState = DDstate

    this.setState(prevState => (
      {
        selectedState: {
          ...prevState.selectedState,
          [name]: dropdownState
        }
      }
    ), function () {
      // this.chooseImage()
      this.props.myFunc1(this.state.selectedState) // sender til sin parent, frontpagewrapper.js
    })
  }

  uploadHandler () {
    // axios.post('../Assets/images/i1.jpg', this.state.selectedImage)
  }

  chooseImage () {
    let randomNum = Math.round((Math.random() * (4 - 1) + 1))
    if (this.state.selectedState.Image === 'Insects') {
      console.log('Showing a picture of an insect')
      let imageDirectory = '/images/i' + randomNum.toString() + '.SVG'
      //  this.props.myFunc1(imageDirectory)

      // this.axiosCall(imageDirectory);
    }

    if (this.state.selectedState.Image === 'Fish') {
      let imageDirectory = '/images/f' + randomNum.toString() + '.SVG'
      // this.axiosCall(imageDirectory);
      console.log('Showing a picture of a fish')
      // this.props.myFunc1(imageDirectory)
    }
    if (this.state.selectedState.Image === 'Cats') {
      console.log('Showing a picture of a cat')
      let imageDirectory = '/images/c' + randomNum.toString() + '.SVG'
      // this.axiosCall(imageDirectory);
      // this.props.myFunc1(imageDirectory)
    }
  }

  updateSelectedState () {
    this.setstate({ selectedState: this.state.selectedState })
  }

  loadElements () {
    return this.props.elements.map((obj) => {
      return (
        <Dropdown
          key={obj.name}
          name={obj.name}
          elements={obj.categories}
          myFunc = {this.updateState}
        />
      )
    })
  }
  render () {
    return (
      <div>
        <Wrapper>

          {this.loadElements()}
        </Wrapper>
      </div>
    )
  }
}

MediaSelector.propTypes = {
  elements: PropTypes.array,
  myFunc1: PropTypes.func

}
