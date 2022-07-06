import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import Reducer from './reducer';

export const store = configureStore({
    reducer: Reducer,
    middleware: [thunkMiddleware],
    preloadedState: {}

});