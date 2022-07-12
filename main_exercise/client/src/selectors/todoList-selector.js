const getState = state => state.todoListData;
export const getTodoList = state => getState(state).todoList;
export const getFilteredTodoList = state => getState(state).filteredTodoList;