import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import subscribeToMoves from '../actions/moves/subscribe'
import postMove from '../actions/moves/post'
import ScrabbleGridItem from './ScrabbleGridItem'
import Play from './Play'
import './ScrabbleBoard.sass'

class ScrabbleBoard extends PureComponent {
  componentWillMount(){
    this.props.subscribeToMoves(this.props.gameId)
  }
  submitMove(){

  }

  render(){
    const { moves } = this.props
    console.log('logging moves')
    console.log(moves)
    
    return (
      <div>
        <div className='scrabbleBoard'>
          {moves.map((row) => {
            console.log(row)
            return row.map((letter, index) => {
              console.log(letter)
              return <ScrabbleGridItem key={index} letter={letter} />
            })
          })}
        </div>
        <Play />
      </div>
    )
  }
}

const mapStateToProps = ({ moves }, { params }) => ({ moves }, {
  gameId: params.gameId
 })
export default connect(mapStateToProps, { subscribeToMoves, postMove })(ScrabbleBoard)
