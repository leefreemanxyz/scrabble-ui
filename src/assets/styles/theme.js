// src/assets/styles/theme.js
import mui from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
const green        = '#00AA86'
const orange       = '#FFAB40'
const blue         = '#3F51B5'
const darkBlue     = '#303F9F'
const red          = '#D32F2F'
const darkRed      = '#C1272D'
const white        = '#ffffff'
const black        = '#000000'
const darkGrey     = '#757575'
const grey         = '#DEDEDE'
const grey50       = 'rgba(222, 222, 222, 0.5)'
const grey30       = 'rgba(222, 222, 222, 0.7)'

// Palette
export const palette = {
  primary1Color: blue,
  primary2Color: blue,
  primary3Color: darkBlue,
  accent1Color: orange,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
