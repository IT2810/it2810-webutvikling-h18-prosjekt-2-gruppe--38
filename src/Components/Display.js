import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'

const Box = styled.div`
  display: block;
  width: 50%;
  height: auto;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 1%;
  text-align: center;
  padding: 3%;


  @media screen and (max-width: 800px) {
    width: 75%;
    }
`

const View = styled.div`
  display: block;
  width: 75%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 0;
  text-align: center;
  
`
const ImgStyle = styled.div`
  display: block;
  width: 50%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 0;
  text-align: center;
  align-self: auto;
  
`

export default class Display extends Component {
  constructor (props) {
    super(props)
    // this.axiosCall = this.axiosCall.bind(this)
    this.state = {
      selectedImage: null,
      selectedObject: {},
      selectedPoem: {},
      selectedSound: [],
      axiosImage: null

    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevProps.dispObject !== this.props.dispObject) {
      /* *******    Putting image in state:      ******* */
      let imgFromObj = this.props.dispObject[0]
      this.setState({ selectedImage: imgFromObj }, function () {
        console.log(this.state.selectedImage)
        this.axiosCall(this.state.selectedImage)
      })
      /* *******    Putting Poem in state:      ******* */
      let poemFromObj = this.props.dispObject[1]
      this.setState({ selectedPoem: poemFromObj }, function () {
        console.log(this.state.selectedPoem)
      })

      /* *******    Putting Sound in state:      ******* */
      let soundFromObj = this.props.dispObject[2]
      this.setState({ selectedSound: soundFromObj }, function () {
        console.log(this.state.selectedSound)
      })
    }
  }
  axiosCall (dir) {
    axios.get(dir)
      .then((result) => {
        this.setState({
          'axiosImage': result.data
        }, () => {
          console.log(result)
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
          <ImgStyle dangerouslySetInnerHTML={{ __html: this.state.axiosImage }} />
        </View>
        <audio src={this.state.selectedSound} type="audio/mp3" autoPlay>
        </audio>
        <p>
          <h2>{this.state.selectedPoem.title}</h2>
          <h4>{this.state.selectedPoem.credits}</h4>
          <h3>{this.state.selectedPoem.poem}</h3>
        </p>
      </Box>
    )
  }
}

Display.propTypes = {
  svgElements: PropTypes.array,
  dir: PropTypes.string,
  dispObject: PropTypes.array

}
