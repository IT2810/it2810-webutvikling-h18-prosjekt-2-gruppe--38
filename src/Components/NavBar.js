import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavList = styled.ul`
    display: flex;
    align-items: stretch;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 20%;
    margin: 0;
    margin-bottom: 2%;
    padding: 0;
    overflow: hidden;
    background-color: papayawhip;
    font-size: 1.2em;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
`

const ListElement = styled.li`
    display: block;
    flex: 0 1 auto;
    flex-grow: 1;
    color: palevioletred;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 16px;
    list-style-type: none;
    text-decoration: none;

    &:hover {
      background-color: palevioletred;
      color: papayawhip;
    }

    @media screen and (max-width: 400px) {
      padding-top: 8px;
      padding-bottom: 8px;
    }
`

export default class NavBar extends Component {
  renderListElements () {
    return this.props.list.map((listValue) => {
      return <ListElement key={listValue}>{listValue}</ListElement>
    })
  }

  render () {
    return (
      <NavList>
        {this.renderListElements()}
      </NavList>
    )
  }
}

NavBar.propTypes = {
  list: PropTypes.array
}
