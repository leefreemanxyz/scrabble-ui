import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import subscribeToMoves from '../actions/moves/subscribe'
import postMove from '../actions/moves/post'
import ScrabbleGridItem from './ScrabbleGridItem'
import Play from './Play'
import './ScrabbleBoard.sass'

class ScrabbleBoard extends PureComponent {
  componentWillMount(){
    this.props.subscribeToMoves(this.props.params.gameId)
  }
  submitMove(){

  }

  render(){
    const { moves } = this.props
    console.log(this.props)
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
        <Play gameId={this.props.params.gameId} />
      </div>
    )
  }
}

const mapStateToProps = ({ moves}) => ({ moves })
export default connect(mapStateToProps, { subscribeToMoves, postMove })(ScrabbleBoard)
