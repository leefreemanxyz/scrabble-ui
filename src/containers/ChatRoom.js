import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import subscribeToMessages from '../actions/messages/subscribe'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import postMessage from '../actions/messages/post'

class ChatRoom extends PureComponent {
  componentWillMount() {
    this.props.subscribeToMessages()
  }

  submitMessage() {
    this.props.postMessage(this.refs.message.getValue())
    
  }

  render() {
    return (
      <div>
        <h1>ChatRoom</h1>
        { this.props.messages.map((msg, index) => {
          return (
            <p key={index}>{ msg.text }</p>
          )
        })}

        <div>
          <TextField
            hintText="Message Field"
            fullWidth={true}
            ref="message"
            multiLine={true} />

          <div style={{ margin: '24px 0 0', textAlign: 'right' }}>
            <RaisedButton label="Shut up" primary={true} onClick={this.submitMessage.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ messages }) => ({ messages })
export default connect(mapStateToProps, { subscribeToMessages, postMessage })(ChatRoom)
