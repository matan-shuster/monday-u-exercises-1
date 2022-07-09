import ItemClient from "../clients/item_client";
const actionTypes = require('./constants')


const itemClient= new ItemClient()

const getTodoList = (todoList) => ({
  type: actionTypes.GET_TODO_LIST,
  payload: todoList
})
const addTodo = (text) => ({
  type: actionTypes.ADD_TODO,
  payload: text
})

const deleteTodo = (id) => ({
  type: actionTypes.DELETE_TODO,
  payload: id
})

const updateStatus = (id, status) => ({
  type: actionTypes.UPDATE_STATUS,
  payload: {
    id,
    status
  }
})

const updateUrgency = (id, urgency) => ({
  type: actionTypes.UPDATE_URGENCY,
  payload: {
    id,
    urgency
  }
})

const deleteSelected = (selectedArray) => ({
  type: actionTypes.DELETE_SELECTED,
  payload: selectedArray
})

const clearTodoList = () => ({
  type: actionTypes.CLEAR_TODO_LIST
})

const filteredTodoList = (filter) => ({
  type: actionTypes.FILTER_TODO_LIST,
  payload: filter
})

export const getTodoListAction = () => async (dispatch) => {
  const todoList = await itemClient.getTodoList()
  dispatch(getTodoList(todoList))
}
export const clearTodoListAction = () => async (dispatch) => {
  await itemClient.clearTodoList()
  dispatch(clearTodoList())
}

export const addTodoAction = (text) => async (dispatch) => {
  const renderedTodo = await itemClient.addTodo(text)
  dispatch(addTodo(renderedTodo))
}

export const deleteTodoAction = (id) => async (dispatch) => {
  await itemClient.deleteTodo(id)
  dispatch(deleteTodo(id))
}

export const updateStatusAction = (id, status) => async (dispatch) => {
  await itemClient.updateStatus(id, status)
  dispatch(updateStatus(id, status))
}

export const updateUrgencyAction = (id, urgency) => async (dispatch) => {
  await itemClient.updateUrgency(id, urgency)
  dispatch(updateUrgency(id, urgency))
}

export const deleteSelectedAction = (selectedArray) => async (dispatch) => {
  await itemClient.deleteSelected(selectedArray)
  dispatch(deleteSelected(selectedArray))
}

export const filterTodoListAction = (filter) => async (dispatch) => {
  dispatch(filteredTodoList(filter))
}
