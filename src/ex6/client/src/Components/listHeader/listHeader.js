import {useEffect, useRef, useState} from "react";

const ListHeader = ({onTodoAdd, onDeleteAll}) => {
    const [todo, setTodo] = useState("");
    const inputRef = useRef();
    const onChangeInput = (event) =>
    {
        setTodo(event.target.value);
    }

    useEffect(() => {
        console.log(todo);
    },[todo]);

    return (
        <div className="list-header">
            <input type="text" id="newTodo" className="newTodo" onChange={onChangeInput} placeholder="Add your new Todo"/>
            <button id="addTodo" className="addTodo" onClick={() => onTodoAdd(todo)}>Add</button>
            <button id="deleteAll" className="deleteAll" onClick={onDeleteAll}>Delete All</button>
        </div>
            )
}

export default ListHeader;