import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
// import App from './Components/App'
import FrontPageWrapper from './Components/FrontPageWrapper'
import registerServiceWorker from './registerServiceWorker'

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`
ReactDOM.render(<FrontPageWrapper />, document.getElementById('root'))
registerServiceWorker()
