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
      startCoordA: '',
      startCoordB: '',
    }
  }
  componentWillMount(){
    //subscribe to moves
  }
  submitMove(){
    console.log(this.props.gameId)
    console.log([this.state.word, [this.state.startCoordA, this.state.startCoordB], this.props.gameId])
    this.props.postMove([this.state.word, [this.state.startCoordA, this.state.startCoordB], this.props.gameId])
  }
  updateWord(event){
    this.setState({
      word: event.target.value,
    })
  }
  updateStartCoordA(event){
    this.setState({
      startCoordA: event.target.value,
    })
  }
  updateStartCoordB(event){
    this.setState({
      startCoordB: event.target.value,
    })
  }
  validateMove(){

  }
  previewMove(){

  }
  render(){
    return (
      <div>
        <h4>Play</h4>
        <TextField
          id="1"
          hintText="Your word"
          ref=""
          value={this.state.word}
          onChange={this.updateWord.bind(this)} />
        <TextField
          id="2"
          hintText="Grid reference"
          ref=""
          value={this.state.startCoordA}
          onChange={this.updateStartCoordA.bind(this)} />
          <TextField
            id="3"
            hintText="Grid reference"
            ref=""
            value={this.state.startCoordB}
            onChange={this.updateStartCoordB.bind(this)} />
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
