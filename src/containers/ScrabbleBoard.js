import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
//import subscribeToMoves from '../actions/moves/subscribe'
//import postMove from '../actions/moves/post'
import ScrabbleGridItem from './ScrabbleGridItem'
import './ScrabbleBoard.sass'

export default class ScrabbleBoard extends PureComponent {
  componentWillMount(){

  }
  submitMove(){

  }

  render(){
    const moves = [
    ['A', 'B', 'O', 'U', 'T', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', 'E', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', 'E', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', 'N', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ]
    return (
      <div className='scrabbleBoard'>
        {moves.map((row) => {
          console.log(row)
          return row.map((letter, index) => {
            console.log(letter)
            return <ScrabbleGridItem key={index} letter={letter} />

          })
        })}
      </div>
    )
  }
}

//const mapStateToProps = ({ moves }) => ({ moves })
//export default connect(mapStateToProps, { subscribeToMoves, postMove, subscribeToUsers })(ScrabbleBoard)
