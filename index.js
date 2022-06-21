
// Model
// If local storage has todo array, then use it, otherwise use default array

let todos;
// retrieve local storage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
//check if its an array
if (Array.isArray(savedTodos)) {
    todos = savedTodos;
    
} else{
    todos = [{
        title:"Wake up",
        dueDate:"2021-01-02",
        id:'id1'
    
    },
    {
        title:"Pray",
        dueDate:"2021-02-03",
        id:'id2'
    },
    {
        title:"Grind",
        dueDate:"2021-03-04",
        id:'id3'
    
    }
    ];

}


//todos.push("manuel");
render()

//creates a todo
function createTodo(title, dueDate) {
    const id = ' ' + new Date().getTime()


    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

    saveTodos();
}
//deletes a todo
function removeTodo(idToDelete) {
    todos = todos.filter(function (todo) {
        //if the id of this todo matches idToDelete, return false
        // for everything else, return true
        if (todo.id === idToDelete) {
            return false;
        }
        else {
            return true;
        }
    

    });

    saveTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// controller
function addTodo(){
    const textbox = document.getElementById("todo-title"); 
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    createTodo(title, dueDate);
    render();
}



function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

   removeTodo(idToDelete);
    render(); 
    
}

// view

function render() {

    //reset the list
    document.getElementById('todoList').innerHTML = "";

    todos.forEach(function (todo) {

        const element = document.createElement("div");
        element.innerText = todo.title + " " + todo.dueDate;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "delete";
        deleteButton.style = 'margin-left: 15px;'; 
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;

        element.appendChild(deleteButton);


        const todoList = document.getElementById('todoList');
        todoList.appendChild(element);
        //document.body.appendChild(element);
    
    }); 
}


