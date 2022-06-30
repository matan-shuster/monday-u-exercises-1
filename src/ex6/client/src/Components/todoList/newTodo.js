const newTodo = ({todo}) => {
    return (
        <div className="todo">
            <input type="checkbox" className="pl" />
            <span className="todo-text">{todo}</span>
            <button className="delete-button">X</button>
        </div>
    )
}

export default newTodo;