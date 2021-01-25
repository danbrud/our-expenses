import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Auth from './utils/Auth'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state/store'

const auth = new Auth()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App auth={auth} />
    </Router>
  </Provider>, document.getElementById('root'))

serviceWorker.register()
