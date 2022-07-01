import ListHeader from "../listHeader/listHeader";
import item_client from "../../clients/item_client";
import {useEffect, useState} from "react";
import TodoItem from "./TodoItem";


const TodoList = () => {
    const [todos, setTodos] = useState([])
    const itemClient = new item_client();
    // init todo list
    useEffect(() => {
        itemClient.getTodos().then(todos => {
            setTodos(todos)
        }).catch(err => {
            console.log(err)
        })
        console.log(todos)
    },[])

    const handelNewTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const handleDeleteAll = () => {

    }

    const handleDeleteTodo = () => {

    }
    const todoList = todos.map(todo => { (
        <TodoItem todo={todo}/>
    )});

    return (
        <div>
            <ListHeader onTodoAdd={handelNewTodo} onDeleteAll={handleDeleteAll}/>
            {todoList}
        </div>
    )
}

export default TodoList