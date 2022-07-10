import {todoListReducer} from "./todoList-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    todoListData: todoListReducer
});
export default allReducers;