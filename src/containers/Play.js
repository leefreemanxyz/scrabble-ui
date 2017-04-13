import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Tiles from './Tiles'
import postMove from '../actions/moves/post'
import subscribeToMoves from '../actions/moves/subscribe'

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
    console.log(this.props.gameId)
    console.log(`${[this.state.word, this.state.startCoord, this.props.gameId]}`)
    this.props.postMove([this.state.word, this.state.startCoord, this.props.gameId])
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

const mapStateToProps = ({ moves}) => ({ moves })

export default connect(mapStateToProps, {subscribeToMoves, postMove})(Play)
