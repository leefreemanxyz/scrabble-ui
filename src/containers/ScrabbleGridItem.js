import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export default class ScrabbleGridItem extends PureComponent {
  render(){

    return(
      <div>
        <p className="scrabbleTile">{
          this.props.letter
        }</p>
      </div>
    )
  }
}

//const mapStateToProps = ({ letter }) => ({ letter })

//export default connect(mapStateToProps)(ScrabbleGridItem)
