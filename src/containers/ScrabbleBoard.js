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
          <div className='headerRowTile'>A</div>
            <div className='headerRowTile'>B</div>
              <div className='headerRowTile'>C</div>
                <div className='headerRowTile'>D</div>
                  <div className='headerRowTile'>E</div>
                    <div className='headerRowTile'>F</div>
                      <div className='headerRowTile'>G</div>
                        <div className='headerRowTile'>H</div>
                          <div className='headerRowTile'>I</div>
                            <div className='headerRowTile'>J</div>
                              <div className='headerRowTile'>K</div>
                                <div className='headerRowTile'>L</div>
                                  <div className='headerRowTile'>M</div>
                                    <div className='headerRowTile'>N</div>
                                      <div className='headerRowTile'>O</div>
          {moves.map((row,index) => {
            console.log(row);
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
