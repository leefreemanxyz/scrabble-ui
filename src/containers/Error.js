import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class apiError extends PureComponent {
  render(){
    return(
      <div>
        {this.props.apiError && <p>{this.props.apiError.message}</p>}
      </div>
    )
  }
}

const mapStateToProps = ({apiError}) => ({apiError})

export default connect(mapStateToProps)(apiError)
