import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Tiles from './Tiles'
import postMove from '../actions/moves/post'

class Play extends PureComponent {
  constructor(){
    super()
    this.state = {
      word: '',
      startCoord: '',
    }
  }
  componentWillMount(){
    //subscribe to moves
  }
  submitMove(){
    console.log(`${[this.state.word, this.state.startCoord]}`)
    this.props.postMove([this.state.word, this.state.startCoord])
  }
  updateWord(event){
    this.setState({
      word: event.target.value,
    })
  }
  updateStartCoord(event){
    this.setState({
      startCoord: event.target.value,
    })
  }
  validateMove(){

  }
  render(){
    return (
      <div>
        <h4>Play</h4>
        <Tiles />
        <TextField
          id="1"
          hintText=""
          ref=""
          value={this.state.word}
          onChange={this.updateWord.bind(this)} />
        <TextField
          id="2"
          hintText=""
          ref=""
          value={this.state.startCoord}
          onChange={this.updateStartCoord.bind(this)} />
        <RaisedButton
          label="Send move"
          onClick={this.submitMove.bind(this)}
           />
      </div>
    )
  }
}

export default connect(null, {postMove})(Play)
