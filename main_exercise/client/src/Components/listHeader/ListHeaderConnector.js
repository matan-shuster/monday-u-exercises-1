import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    addTodoAction,
    clearTodoListAction
} from '../../actions/todoList-actions'
import ListHeaderComponent from './listHeaderComponent'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addTodoAction: addTodoAction,
            clearTodoListAction: clearTodoListAction
        },
        dispatch
    )
}

export default connect(null, mapDispatchToProps)(ListHeaderComponent)
