import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './services/serviceWorker'
import GlobalStyles from './services/GlobalStyles'
import GlobalFonts from './fonts/fonts'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
