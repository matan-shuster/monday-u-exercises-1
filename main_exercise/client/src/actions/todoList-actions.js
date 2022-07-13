import ItemClient from "../clients/item_client";


const itemClient= new ItemClient()

export const getTodoListAction = () => async (dispatch) => {
  const todoList = await itemClient.getTodoList()
  dispatch({type: "GET_TODO_LIST", payload: todoList})
}
export const clearTodoListAction = () => async (dispatch) => {
  await itemClient.clearTodoList()
  dispatch({type: "CLEAR_TODO_LIST"})
}

export const addTodoAction = (todo) => async (dispatch) => {
  const renderedTodo = await itemClient.addTodo(todo)
  dispatch({type: "ADD_TODO", payload: renderedTodo})
}

export const deleteTodoAction = (id) => async (dispatch) => {
  await itemClient.deleteTodo(id)
  dispatch({type: "DELETE_TODO", payload: id})
}

export const updateStatusAction = (id, status) => async (dispatch) => {
  await itemClient.updateStatus(id, status)
  dispatch({type: "UPDATE_STATUS", payload: {id, status}})
}

export const updateUrgencyAction = (id, urgency) => async (dispatch) => {
  await itemClient.updateUrgency(id, urgency)
  dispatch({type: "UPDATE_URGENCY", payload: {id, urgency}})
}

export const deleteSelectedAction = (selectedArray) => async (dispatch) => {
  await itemClient.deleteSelected(selectedArray)
  dispatch({type: "DELETE_SELECTED", payload: selectedArray})
}

export const filterTodoListAction = (filterStatus) => async (dispatch) => {
  dispatch({type: "FILTER_TODO_LIST", payload: filterStatus})
}
