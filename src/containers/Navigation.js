import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import signOut from '../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import FlatButton from 'material-ui/FlatButton'
import { history } from '../store'
import {palette} from '../assets/styles/theme'
import { ROOT_PATH, CHAT_PATH, USER_SIGN_UP_PATH, USER_SIGN_IN_PATH} from '../routes'


export class Navigation extends PureComponent {
  constructor(){
    super()
    this.state = {
      open: false
    }
  }
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }
  toggleMenu(){
    this.setState({
      open: !this.state.open
    })
  }
  signUp(){
    history.push(USER_SIGN_UP_PATH)
  }
  signIn(){
    history.push(USER_SIGN_IN_PATH)
  }
  goHome(){
    history.push(ROOT_PATH)
  }
  signOut(event) {
    event.preventDefault()
    this.props.signOut()
    history.push(USER_SIGN_IN_PATH)
  }
  render(){
    const {signedIn} = this.props
    return(
      <div>
      <AppBar title="sCRAPple"
        iconElementLeft={<IconButton><ChatBubble /></IconButton>}
        onLeftIconButtonTouchTap={this.toggleMenu.bind(this)}
        iconElementRight={signedIn ?
          <FlatButton label="Sign Out" onClick={this.signOut.bind(this)} /> :
          <div><FlatButton label="Sign In" onClick={this.signIn} style={{"color":palette.alternateTextColor}} />
          <FlatButton label="Sign Up" onClick={this.signUp} style={{"color":palette.alternateTextColor}} /></div>
        }
        />
      <Drawer open={this.state.open}>
        <div style={{paddingTop: 80}}>
          <Link to={ROOT_PATH}
            onTouchTap={this.toggleMenu.bind(this)}>
            <MenuItem>Lobby</MenuItem>
          </Link>
          <Link to={CHAT_PATH}
            onTouchTap={this.toggleMenu.bind(this)}>
            <MenuItem>Chat</MenuItem>
          </Link>
        </div>
      </Drawer>
        </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
