import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import LinearProgress from 'material-ui/LinearProgress';


class Loading extends PureComponent {
  render(){
    return(
      <div>
        {this.props.loading && <LinearProgress mode="indeterminate" />}
      </div>
    )
  }
}

const mapStateToProps = ({loading}) => ({loading})

export default connect(mapStateToProps)(Loading)
