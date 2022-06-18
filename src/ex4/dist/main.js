
import ItemManager from "../server/services/item_manager.js";

// Implement the `Main` class here
class Main{

    init() {
        const itemManager = new ItemManager(document.getElementById("todoList"));

        function renderTodoList() {
            document.getElementById("todoList").innerHTML = "";
            const todoList = itemManager.getTodoList();
            todoList.forEach(element => {
                const li = document.createElement("li");
                li.id = 'todo' + todoList.indexOf(element);
                li.innerHTML = `<input type='checkbox' name='selectTodo' class= pl id="checkbox" value="${element}"> ${element} </input>`;
                const deleteButton = document.createElement("img");
                deleteButton.src = "./images/delete_icon.svg";
                deleteButton.className = "deleteButton";
                deleteButton.addEventListener("click", () => {
                    deleteTodo(element);
                });
                li.appendChild(deleteButton);
                document.getElementById("todoList").appendChild(li);

            })

        }
        function getHistory() {
            itemManager.getHistory();
            renderTodoList();
        }

        // need to fix this
        // function toggleDeleteButton() {
        //    if(document.querySelectorAll('.pl:checked').length > 0){
        //        document.getElementById("deleteTodo").hidden = false;
        //        return
        //    }
        //    document.getElementById("deleteTodo").hidden = true;
        //
        // }
        window.addEventListener("keyup", e => {
            if(e.target.id !== "newTodo"){
                if (e.ctrlKey && e.key === 'z') {
                    getHistory();
                }
            }})

        async function addTodo() {
            const todo = document.getElementById("newTodo").value;
            document.getElementById("newTodo").value = "";
            await itemManager.addTodo(todo);
            renderTodoList();

        }

        document.getElementById("addTodo").addEventListener("click", addTodo);


        function deleteSelected() {
            let todos = document.querySelectorAll('.pl:checked');
            todos.forEach(element => {
                itemManager.deleteTodo(element.value);
            });
            renderTodoList();
        }

        function deleteTodo(todo) {
            itemManager.deleteTodo(todo);
            renderTodoList();
        }

        document.getElementById("deleteTodo").addEventListener("click", deleteSelected);

    }
}


const main = new Main();

document.addEventListener("DOMContentLoaded", function () {
    // you should create an `init` method in your class
    // the method should add the event listener to your "add" button
    main.init();

});