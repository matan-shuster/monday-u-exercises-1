import ListHeader from "../listHeader/listHeader";
import {useState} from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const handelNewTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const handleDeleteAll = () => {

    }

    const handleDeleteTodo = () => {

    }

    return (
        <div>
            <ListHeader onTodoAdd={handelNewTodo} onDeleteAll={handleDeleteAll}/>
            {/*<TodoListBody todos={todos}/>*/}
        </div>
    )
}

export default TodoList