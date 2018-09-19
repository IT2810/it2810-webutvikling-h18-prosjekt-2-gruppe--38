import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Images from './Images'
import MediaSelector from './MediaSelector'
import axios from 'axios'

const Box = styled.div`
  display: block;
  border: 2px solid palevioletred;
  width: 50%;
  height: auto;
  margin: auto;
  margin-top: 6%;
  margin-bottom: 4%;
  text-align: center;


  @media screen and (max-width: 800px) {
    width: 75%;
    }
`

const View = styled.div`
  display: block;
  width: 50%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 0;
  text-align: center;
  
`
export default class Display extends Component {
  constructor (props) {
    super(props)
    // this.axiosCall = this.axiosCall.bind(this)
    this.state = {
      selectedImage: null

    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevProps.dir !== this.props.dir) {
      this.axiosCall(this.props.dir)
    }
  }
  axiosCall (dir) {
    axios.get(dir)
      .then((result) => {
        this.setState({
          selectedImage: result.data
        })
      })
      .catch(function (error) {
      // handle error
        console.log(error)
      })
  }

  render () {
    return (
      <Box>
        <View>
          <div dangerouslySetInnerHTML={{ __html: this.state.selectedImage }} />;
        </View>
        <p>
          Text for the display goes here
        </p>
      </Box>
    )
  }
}

Display.propTypes = {
  svgElements: PropTypes.array,
  dir: PropTypes.string
}
