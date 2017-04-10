import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import LinearProgress from 'material-ui/LinearProgress';


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
