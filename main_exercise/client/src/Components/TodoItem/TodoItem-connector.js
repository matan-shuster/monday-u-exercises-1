import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  updateStatusAction,
  updateUrgencyAction
} from '../../actions/todoActions'

import todoItemComponent from './todoItemComponent'

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateStatusAction,
      updateUrgencyAction
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(todoItemComponent)