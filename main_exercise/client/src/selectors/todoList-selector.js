const getTodoListState = state => state.todoList;

export const getTodoList = state => getTodoListState(state).todoList;

const getFilteredTodoListState = state => state.todoList;
export const getFilteredTodoList = state => getFilteredTodoListState(state).filteredTodoList;