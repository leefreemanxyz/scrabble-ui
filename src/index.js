// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store, { history } from './store'

import App from './App'
import ChatRoom from './containers/ChatRoom'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ChatRoom} />
        <Route path="/users/sign-up" component={SignUp} />
        <Route path="/users/sign-in" component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
