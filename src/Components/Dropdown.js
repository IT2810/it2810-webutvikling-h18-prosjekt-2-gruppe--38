import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.div`
  background-color: palevioletred;
  color: papayawhip;
  padding: 10px;
  font-size: 1vw;
  border: none;
  border-radius: 7px;

  @media screen and (max-width: 800px) {
    font-size: 2vw;
  }
`

const Content = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

const Container = styled.div`
  display: block;
  flex: 0 1 auto;
  flex-grow: 1;
  margin: 3%;

  &:hover {
    ${Content} {
      display: block;
    }
    
    ${Button} {
      background-color: #3e8e41;
    }
  }
`

const Element = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`
export default class Dropdown extends Component {
  loadDropdownElements () {
    return this.props.elements.map((name) => {
      return <Element href="#" key={name}>{name}</Element>
    })
  }
  render () {
    return (
      <Container>
        <Button>{this.props.name}</Button>
        <Content>
          {this.loadDropdownElements()}
        </Content>
      </Container>
    )
  }
}

Dropdown.propTypes = {
  name: PropTypes.string,
  elements: PropTypes.array
}
