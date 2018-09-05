import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

const AppWrapper = styled.div`
  text-align: center;

`
const rotate360 = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

const AppHeader = styled.div`
  background-color: papayawhip;
  height: 150px;
  padding: 20px;
  color: palevioletred;
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`

const AppTitle = styled.div`
  font-size: 1.5em;

`

const AppIntro = styled.div`
  font-size: large;

`

export default class App extends Component {
  render () {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={ logo } alt="logo">
          </AppLogo>
          <AppTitle>Welcome to React!</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppWrapper>
    )
  }
}
