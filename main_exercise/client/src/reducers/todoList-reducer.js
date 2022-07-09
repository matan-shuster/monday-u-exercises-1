import actionTypes from '../actions/constants'

const initialState = {
  todoList: [],
  filteredTodoList: []
}

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TODO_LIST:
      return {
        ...state,
        todoList: action.payload
      }
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    case actionTypes.FILTER_TODO_LIST:
      return {
        ...state,
        filteredTodoList: state.todoList.filter(
          (todo) => todo.status === action.payload
        )
      }
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload)
      }
    case actionTypes.UPDATE_STATUS:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              status: action.payload.status
            }
          }
          return todo
        })
      }
    case actionTypes.UPDATE_URGENCY:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              urgency: action.payload.urgency
            }
          }
          return todo
        })
      }
    case actionTypes.DELETE_SELECTED:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => !action.payload.includes(todo.id)
        )
      }
    case actionTypes.CLEAR_TODO_LIST:
      return {
        ...state,
        todoList: []
      }
    default:
      return state;
  }
}
