import React from 'react'
import ReactDOM from 'react-dom'
import 'src/styles/index.css'
import App from './app'
import * as serviceWorker from './serviceWorker'
import * as ls from 'src/components/useLocalStorage'

// this is needed for favorites & watch-later
!ls.get() && ls.set({})

if (process.env.NODE_ENV === 'development') {
  let fav = document.getElementById('favicon')
  fav.href = './favicon-dev.ico'
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
