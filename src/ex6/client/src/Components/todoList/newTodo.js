const newTodo = (props) => {
    return (
        <div className="todo">
            <input type="checkbox" className="pl" />
            <span className="todo-text">{props.todo}</span>
            <button className="delete-button">X</button>
        </div>
    )
}

export default newTodo;