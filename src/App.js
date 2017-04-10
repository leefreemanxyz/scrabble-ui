import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import './App.sass'
import Loading from './containers/Loading'
import APIError from './containers/Error'
import Navigation from './containers/Navigation'

class App extends Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
<div className="wrap">
        <Navigation />
          <Loading />
          <APIError />
        <div className="app">
          { this.props.children }
        </div></div>
      </MuiThemeProvider>
    )
  }
}

export default App
