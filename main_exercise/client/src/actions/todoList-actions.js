import actionTypes from '../constants/actionTypes';

const getTodoList = (todoList) => ({
    type: actionTypes.GET_TODO_LIST,
    payload: todoList
}
const addTodo = (text) => ({
    type: actionTypes.ADD_TODO,
    payload: text,
});

const deleteTodo = (id) => ({
    type: actionTypes.DELETE_TODO,
    payload: id,
});

const updateStatus = (id, status) => ({
    type: actionTypes.UPDATE_STATUS,
    payload: {
        id,
        status,
    }
});

const updateUrgency = (id, urgency) => ({
    type: actionTypes.UPDATE_URGENCY,
    payload: {
        id,
        urgency,
    }
});

const deleteSelected = (selectedArray) => ({
    type: actionTypes.DELETE_SELECTED,
    payload: selectedArray,
});

const clearTodoList = () => ({
    type: actionTypes.CLEAR_TODO_LIST,
});

const darAction = (dar) => {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(clearTodoList(dar));
    }
}


const clearTodoListAction = () => (dispatch) => {
    const result = darAction(1);
    dispatch(result)
    dispatch(clearTodoList());

}

