import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getTodoList,
  getFilteredTodoList
} from '../../selectors/todoList-selector'
import {
  addTodoAction,
  clearTodoListAction,
  deleteSelectedAction,
  deleteTodoAction,
  filterTodoListAction,
  getTodoListAction, updateStatusAction, updateUrgencyAction
} from '../../actions/todoList-actions'

import TodoListComponent from './TodoListComponent'

const mapStateToProps = (state, ownProps) => {
  const todoList = getTodoList(state)
  const filteredTodoList = getFilteredTodoList(state)
  return {
    todoList,
    filteredTodoList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTodoList: bindActionCreators(getTodoListAction, dispatch),
    addTodo: bindActionCreators(addTodoAction, dispatch),
    clearTodoList: bindActionCreators(clearTodoListAction, dispatch),
    deleteSelected: bindActionCreators(deleteSelectedAction, dispatch),
    filterTodoList: bindActionCreators(filterTodoListAction, dispatch),
    updateStatus: bindActionCreators(updateStatusAction, dispatch),
    updateUrgency: bindActionCreators(updateUrgencyAction, dispatch),
    deleteTodo: bindActionCreators(deleteTodoAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent)
