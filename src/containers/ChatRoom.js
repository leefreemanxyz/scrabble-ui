import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import subscribeToMessages from '../actions/messages/subscribe'
import subscribeToUsers from '../actions/user/subscribe'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import postMessage from '../actions/messages/post'
import ChatMessage from './ChatMessage.js'

class ChatRoom extends PureComponent {
  constructor(){
    super()

    this.state = {
      message: ''
    }
  }
  componentWillMount() {
    this.props.subscribeToMessages()
    this.props.subscribeToUsers()
  }

  componentDidUpdate(prevProps){
    if (prevProps.messages.length === this.props.messages.length) return

    this.refs.chat.scrollTop = this.refs.chat.scrollHeight
  }

  submitMessage() {
    if (this.validateMessage()){
      this.props.postMessage(this.refs.message.getValue())
      this.setState({
        message: ''
      })
    }

  }
  checkForEnter(event) {
    if (event.keyCode === 13) {
      this.submitMessage()
    }
  }
  validateMessage(){
    const { message } = this.refs
    if(message.getValue().length < 1){
      this.setState({
      messageError: 'Either write a message or shut up'

      })
      return false
    } else {
      this.setState({
        messageError: null
      })
      return true
    }
  }
  updateMessage(event) {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div style={{ padding:24, paddingBottom: 86, width: '100%'}}>
        <div ref="chat" style={{ maxHeight: '80%', overflowY: 'auto', width: '100%'}}>
          {this.props.messages.map((msg, index) => {
            return (
              <ChatMessage key={index} message={msg} />
            )
          })}
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '80%', padding: 24}}>
          <div style={{ margin: '24px 0 0', textAlign: 'right'}}>
            <TextField
              hintText="Message Field"
              ref="message"
              fullWidth={true}
              value={this.state.message}
              onChange={this.updateMessage.bind(this)}
              onKeyUp={this.checkForEnter.bind(this)}
              multiLine={true}
              errorText={this.state.messageError}
              />
            <RaisedButton disabled={this.props.loading} label="Shut up" primary={true} onClick={this.submitMessage.bind(this)} />
          </div>
        </div>
      </div>


    )
  }
}

const mapStateToProps = ({ messages, loading }) => ({ messages, loading })
export default connect(mapStateToProps, { subscribeToMessages, postMessage, subscribeToUsers })(ChatRoom)
