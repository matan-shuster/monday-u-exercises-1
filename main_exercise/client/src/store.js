import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { todoListReducer } from './reducers/todoList-reducer'

export const store = configureStore({
  reducer: todoListReducer,
  middleware: [thunkMiddleware],
  preloadedState: {}
})

