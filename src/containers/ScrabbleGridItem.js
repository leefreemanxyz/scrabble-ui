import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export default class ScrabbleGridItem extends PureComponent {
  render(){

    return(
      <div>
        <div className="scrabbleTile">{
          this.props.letter
        }</div>
      </div>
    )
  }
}

//const mapStateToProps = ({ letter }) => ({ letter })

//export default connect(mapStateToProps)(ScrabbleGridItem)
