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
  background-color: #f1f1f1;

  &:hover {
    background-color: #ddd;
  }
`

export default class Dropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: ''
    }
  }
  handleCategoryClick (e) {
    let selected = e.target.innerHTML
    console.log(selected)
    this.setState({ selected: selected })
    // KALLER PÅ FUNKSJONEN I PARENT-KOMPONENTEN!
    this.props.myFunc(selected, this)
    
        this.setState({ selected: e.target.innerHTML })
    let xs = document.getElementsByClassName(this.props.name)

    for (let x of xs) {
      x.style.backgroundColor = '#f1f1f1'
    }
    e.target.style.backgroundColor = 'palevioletred'
  };
  loadDropdownElements () {
    // console.log(this.props.elements)
    return this.props.elements.map((name) => {
      return (
        <Element
          className={this.props.name}
          onClick={(e) => this.handleCategoryClick(e, this.props.name)}
          href="#"
          key={name}
          style={{ backgroundColor: '#f1f1f1' }}
        >
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
  elements: PropTypes.array,
  myFunc: PropTypes.func

}
