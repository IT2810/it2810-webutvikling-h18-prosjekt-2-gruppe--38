import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import FrontPageWrapper from './Components/FrontPageWrapper'
import registerServiceWorker from './registerServiceWorker'

injectGlobal`
  /* devanagari */
  @font-face {
    font-family: 'Palanquin';
    font-style: normal;
    font-weight: 400;
    src: local('Palanquin Regular'), local('Palanquin-Regular'), url(https://fonts.gstatic.com/s/palanquin/v3/9XUnlJ90n1fBFg7ceXwccFtN_LA.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Palanquin';
    font-style: normal;
    font-weight: 400;
    src: local('Palanquin Regular'), local('Palanquin-Regular'), url(https://fonts.gstatic.com/s/palanquin/v3/9XUnlJ90n1fBFg7ceXwcf1tN_LA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Palanquin';
    font-style: normal;
    font-weight: 400;
    src: local('Palanquin Regular'), local('Palanquin-Regular'), url(https://fonts.gstatic.com/s/palanquin/v3/9XUnlJ90n1fBFg7ceXwccVtN.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Palanquin', sans-serif;
    background-color: papayawhip;
    text-align: center;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`
ReactDOM.render(<FrontPageWrapper />, document.getElementById('root'))
registerServiceWorker()
