import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  updateStatusAction,
  updateUrgencyAction
} from '../../actions/todoActions'

import todoItemComponent from './todoItemComponent'


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateStatusAction,
      updateUrgencyAction
    },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(todoItemComponent)