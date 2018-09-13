import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Box = styled.div`
  display: block;
  border: 2px solid palevioletred;
  width: 50%;
  height: auto;
  margin: auto;
  margin-top: 6%;
  margin-bottom: 10%;
  text-align: center;

  @media screen and (max-width: 800px) {
    width: 75%;
    }
`

const View = styled.div`
  display: block;
  border: 2px solid black;
  width: 50%;
  height: auto;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
`
export default class Display extends Component {
  load () {
    // TODO: load svg, image and music elements using AJAX after implementing logic for creating the sets
  }
  render () {
    return (
      <Box>
        <View>
          Hello, this is the display box, where svg and image are is going to be displayed
        </View>
        <p>
          Text for the display goes here
        </p>
      </Box>
    )
  }
}

Display.propTypes = {
  svgElements: PropTypes.array
}
