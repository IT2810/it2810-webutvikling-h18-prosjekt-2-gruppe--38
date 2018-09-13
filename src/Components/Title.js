import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderWrapper = styled.h1`
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    background-color: papayawhip;
    color: palevioletred;
    margin: 0;
    font-size: 2em;
`

export default class Title extends Component {
  render () {
    return (
      <HeaderWrapper>{this.props.title}</HeaderWrapper>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string
}
