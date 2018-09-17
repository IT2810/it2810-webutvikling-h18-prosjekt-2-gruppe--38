import React, { Component } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import PropTypes from 'prop-types'

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
  loadElements () {
    return this.props.elements.map((obj) => {
      return (
        <Dropdown
          key={obj.name}
          name={obj.name}
          elements={obj.categories}
        />
      )
    })
  }
  render () {
    return (
      <Wrapper>
        {this.loadElements()}
      </Wrapper>
    )
  }
}

MediaSelector.propTypes = {
  elements: PropTypes.array
}
