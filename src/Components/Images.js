import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Primary = styled.img`
  width: 100%;
  height: 100;
  margin: 0;
  padding: 0;
`

export default class Images extends Component {
  load () {
    // TODO: load svg, image and music elements using AJAX after implementing logic for creating the sets
  }
  render () {
    return <Primary src='/images/test.PNG' />
  }
}
