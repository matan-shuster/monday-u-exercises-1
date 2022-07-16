import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {deleteTodoAction, updateStatusAction, updateUrgencyAction} from "../../actions/todoList-actions";
import TodoItemComponent from "./TodoItemComponent";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateStatus: bindActionCreators(updateStatusAction, dispatch),
        updateUrgency: bindActionCreators(updateUrgencyAction, dispatch),
        deleteTodo: bindActionCreators(deleteTodoAction, dispatch)
    }

}

export default connect(null, mapDispatchToProps)(TodoItemComponent)