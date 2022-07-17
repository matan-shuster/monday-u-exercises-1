import { todoListReducer } from '../todoList-reducer'

test('should return the initial state', () => {
  expect(todoListReducer(undefined, { undefined })).toEqual({
    todoList: [],
    filteredTodoList: []
  })
})

test('should return the state with todoList', () => {
  expect(
    todoListReducer(undefined, {
      type: 'GET_TODO_LIST',
      payload: [{ id: 1, title: 'test', status: 'In Progress', urgency: 'low' }]
    })
  ).toEqual({
    todoList: [{ id: 1, title: 'test', status: 'In Progress', urgency: 'low' }],
    filteredTodoList: []
  })
})

test('should add a todo', () => {
  const previousState = {
    todoList: [{ id: 1, title: 'test', status: 'In Progress', urgency: 'low' }],
    filteredTodoList: []
  }
  expect(
    todoListReducer(previousState, {
      type: 'ADD_TODO',
      payload: [{ id: 2, title: 'test2', status: 'done', urgency: 'high' }]
    })
  ).toEqual({
    todoList: [
      { id: 1, title: 'test', status: 'In Progress', urgency: 'low' },
      { id: 2, title: 'test2', status: 'done', urgency: 'high' }
    ],
    filteredTodoList: []
  })
})

test('should filter the todoList', () => {
  expect(
    todoListReducer(undefined, { type: 'FILTER_TODO_LIST', payload: 'done' })
  ).toEqual({ todoList: [], filteredTodoList: [] })
})

test('should delete a todo', () => {
  const previousState = {
    todoList: [{ id: 1, title: 'test', status: 'In Progress', urgency: 'low' }],
    filteredTodoList: []
  }
  expect(
    todoListReducer(previousState, { type: 'DELETE_TODO', payload: 1 })
  ).toEqual({
    todoList: [],
    filteredTodoList: []
  })
})

test('should update the status', () => {
  const previousState = {
    todoList: [{ id: 1, title: 'test', status: 'In Progress', urgency: 'low' }],
    filteredTodoList: []
  }
  expect(
    todoListReducer(previousState, {
      type: 'UPDATE_STATUS',
      payload: { id: 1, status: 'done' }
    })
  ).toEqual({
    todoList: [{ id: 1, title: 'test', status: 'done', urgency: 'low' }],
    filteredTodoList: []
  })
})

test('should update the urgency', () => {
  const previousState = {
    todoList: [{ id: 1, title: 'test', status: 'In Progress', urgency: 'low' }],
    filteredTodoList: []
  }
  expect(
    todoListReducer(previousState, {
      type: 'UPDATE_URGENCY',
      payload: { id: 1, urgency: 'high' }
    })
  ).toEqual({
    todoList: [
      { id: 1, title: 'test', status: 'In Progress', urgency: 'high' }
    ],
    filteredTodoList: []
  })
})

test('should delete selected todo', () => {
  const previousState = {
    todoList: [{ id: 1, title: 'test', status: 'In Progress', urgency: 'low' }],
    filteredTodoList: []
  }
  expect(
    todoListReducer(previousState, { type: 'DELETE_SELECTED', payload: [1] })
  ).toEqual({
    todoList: [],
    filteredTodoList: []
  })
})

test('should filter todo list', () => {
  const previousState = {
    todoList: [
      { id: 1, title: 'test', status: 'In Progress', urgency: 'low' },
      {
        id: 2,
        title: 'test2',
        status: 'done',
        urgency: 'high'
      }
    ],
    filteredTodoList: []
  }
  expect(
    todoListReducer(previousState, {
      type: 'FILTER_TODO_LIST',
      payload: 'done'
    })
  ).toEqual({
    todoList: [
      { id: 1, title: 'test', status: 'In Progress', urgency: 'low' },
      {
        id: 2,
        title: 'test2',
        status: 'done',
        urgency: 'high'
      }
    ],
    filteredTodoList: [
      { id: 2, title: 'test2', status: 'done', urgency: 'high' }
    ]
  })
})

test('should clear the todoList', () => {
  const previousState = {
    todoList: [
      { id: 1, title: 'test', status: 'In Progress', urgency: 'low' },
      { id: 2, title: 'test2', status: 'done', urgency: 'high' }
    ],
    filteredTodoList: []
  }
  expect(todoListReducer(previousState, { type: 'CLEAR_TODO_LIST' })).toEqual({
    todoList: [],
    filteredTodoList: []
  })
})
