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
        <div style={{float:'left', width: '30px'}}>
      <div className='headerRowTile'>*</div>
      <div className='headerRowTile'>1</div>
      <div className='headerRowTile'>2</div>
      <div className='headerRowTile'>3</div>
      <div className='headerRowTile'>4</div>
      <div className='headerRowTile'>5</div>
      <div className='headerRowTile'>6</div>
      <div className='headerRowTile'>7</div>
      <div className='headerRowTile'>8</div>
      <div className='headerRowTile'>9</div>
      <div className='headerRowTile'>10</div>
      <div className='headerRowTile'>11</div>
      <div className='headerRowTile'>12</div>
      <div className='headerRowTile'>13</div>
      <div className='headerRowTile'>14</div>
      <div className='headerRowTile'>15</div>
      </div>
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

              <div>{index}</div>
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
