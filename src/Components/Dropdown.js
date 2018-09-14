import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.div`
  background-color: papayawhip;
  color: palevioletred;
  padding: 10px;
  font-size: 1.2em
  border: 2px solid palevioletred;
  border-radius: 7px;
`

const Content = styled.div`
  display: none;
  position: relative;
  width: inherit;
  padding: 0;
  margin: 0;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

const Container = styled.div`
  display: block;
  flex: 0 1 auto;
  flex-grow: 1;
  margin: 3%;
  height: auto;
  width: inherit;

  &:hover {
    ${Content} {
      display: block;
    }

    ${Button} {
      background-color: palevioletred;
      color: papayawhip;
    }
  }
  
  @media screen and (max-width: 700px) { 
    margin: 3% 0 3% 0;
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
  constructor (props) {
    super(props)
    this.state = { selected: '' }
  }

  handleClick (e) {
    this.setState({ selected: e.target.innerHTML })
    let xs = document.getElementsByClassName('selectors')
    for (let x of xs) {
      x.style.backgroundColor = '#f1f1f1'
    }
    // console.log(xs.style.)

    e.target.style.backgroundColor = 'palevioletred'
  }

  loadDropdownElements () {
    return this.props.elements.map((name) => {
      return (
        <Element
          className="selectors"
          onClick={(e) => this.handleClick(e)}
          href="#"
          key={name}>
          {name}
        </Element>
      )
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
