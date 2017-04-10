import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import signOut from '../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import FlatButton from 'material-ui/FlatButton'
import { history } from '../store'
import {palette} from '../assets/styles/theme'
export const ROOT_PATH = '/'
export const USER_SIGN_IN_PATH = '/users/sign-in'
export const USER_SIGN_UP_PATH = '/users/sign-up'



export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
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
    history.push(ROOT_PATH)
  }
  render(){
    const {signedIn} = this.props
    return(
      <AppBar title="ChatRoom"
        iconElementLeft={<IconButton onClick={this.goHome}><ChatBubble /></IconButton>}
        iconElementRight={signedIn ?
          <FlatButton label="SignOut" onClick={this.signOut.bind(this)} /> :
          <div><FlatButton label="Sign In" onClick={this.signIn} style={{"color":palette.alternateTextColor}} />
          <FlatButton label="Sign Up" onClick={this.signUp} style={{"color":palette.alternateTextColor}} /></div>
        }
        />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
