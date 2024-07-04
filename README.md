# To-Do-List-Using-JavaScript...

## Aim :

Create a fully functional To-Do List application using ES6 JavaScript. This project will help you understand and apply ES6 features, such as classes, modules, arrow functions, template literals, and the fetch API.

## Requirements :

### User Interface :

A clean, intuitive user interface that allows users to add, edit, delete, and mark tasks as complete. Tasks should be displayed in a list format. Each task should have a title, description, due date, and a checkbox to mark it as complete.

### Features :

**Add Task:** Allow users to add a new task with a title, description, and due date.

**Edit Task:** Allow users to edit the details of an existing task.

**Delete Task:** Allow users to delete a task.

**Complete Task:** Allow users to mark a task as complete or incomplete.

**Filter Tasks:** Provide options to filter tasks by their completion status (e.g., all, completed, incomplete).

**Persist Data:** Store the tasks in the browser's local storage so that the list persists across page reloads.

**Fetch Tasks:** Optionally, allow users to fetch tasks from a provided API endpoint and display them in the list.

### Code Structure :

Use ES6 classes to create the task objects and manage the to-do list. Separate your code into modules to keep it organized and maintainable. Use ES6 arrow functions, template literals, and other modern syntax features.

### Styling :

Style the application using CSS to make it visually appealing. Ensure the application is responsive and works well on different screen sizes.

### Documentation :

Comment your code to explain the functionality of different parts. Write a README file to explain how to set up and run the project, as well as an overview of the application's features.

## Implementation Steps :

#### Setup :

Create a new project directory and initialize it with npm (optional). Set up your project structure with separate folders for HTML, CSS, and JavaScript files.

#### HTML :

Create the basic structure of the HTML file with a container for the to-do list and form elements for adding tasks.

#### CSS :

Style the application to make it user-friendly and visually appealing.

#### JavaScript :

**Task Class:** Create a class to represent a task with properties like title, description, due date, and completion status.
        
**ToDoList Class:** Create a class to manage the list of tasks, including methods to add, edit, delete, and filter tasks.

**Local Storage:** Implement methods to save and retrieve tasks from the local storage.
        
**Event Listeners:** Add event listeners to handle user interactions, such as adding, editing, and deleting tasks.
        
**Fetch API:** Optionally, add functionality to fetch tasks from an external API and populate the list.

## index.html :

 ```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Work To-Do List</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="container">
        <h1>TO-DO LIST</h1>
        <p class="yellow-text">Enter text into the input field to add items to your list.</p>
        <p class="green-text">Click the item to mark it as complete.</p>
        <p class="purple-text">Click the "X" to remove the item from your list.</p>
        <div class="input-group">
            <input type="text" id="new-item" placeholder="New item...">
            <button id="add-item"><i class="fas fa-pen"></i></button>
        </div>
        <ul id="todo-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

## styles.css : 

```css

body {
  font-family: Arial, sans-serif;
  background: url('https://wallpapers.com/images/hd/black-and-gold-glitter-wallpaper-hs03v2ldyulosznd.jpg') no-repeat center center/cover;
  color: #ffffff;
  text-align: center;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #8da9ac;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 800px;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center contents vertically */
  align-items: center; /* Center contents horizontally */
}

h1 {
  font-size: 3em;
  margin-top: 0;
}

.yellow-text {
  color: #ffeb3b; /* Yellow color */
  font-size: 1.5em;
  margin: 10px 0;
}

.green-text {
  color: #2b822e; /* Green color */
  font-size: 1.5em;
  margin: 10px 0;
}

.purple-text {
  color: #9c27b0; /* Dark purple color */
  font-size: 1.5em;
  margin: 10px 0;
}

.input-group {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%; /* Ensure input group doesn't overflow */
}

input[type="text"] {
  padding: 15px;
  font-size: 1.2em;
  width: 80%;
  border: none;
  border-radius: 5px 0 0 5px;
}

button {
  padding: 15px;
  font-size: 1.2em;
  border: none;
  background-color: #007c91;
  color: #ffffff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

button:hover {
  background-color: #005f6b;
}

ul {
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
  text-align: left;
  width: 100%; /* Ensure ul doesn't overflow */
}

li {
  background-color: #00838f;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
}

li.completed {
  text-decoration: line-through;
  opacity: 0.6;
}

li .delete {
  cursor: pointer;
  color: #ffccbc;
}

@media (max-width: 600px) {
  .container {
    width: 95%;
  }

  input[type="text"] {
    width: 70%;
  }

  button {
    width: 30%;
  }

  h1 {
    font-size: 2em;
  }

  .yellow-text, .green-text, .purple-text {
    font-size: 1em;
  }

  li {
    font-size: 1em;
  }
}

```

## script.js :

```js

document.getElementById('add-item').addEventListener('click', function() {
    const newItemInput = document.getElementById('new-item');
    const newItemText = newItemInput.value.trim();
    
    if (newItemText !== "") {
        addItemToList(newItemText);
        newItemInput.value = "";
        saveList();
    }
});

function addItemToList(text) {
    const li = document.createElement('li');
    li.textContent = text;
    
    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function() {
        li.remove();
        saveList();
    });
    
    li.appendChild(deleteBtn);
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
        saveList();
    });
    
    document.getElementById('todo-list').appendChild(li);
}

function saveList() {
    const items = [];
    document.querySelectorAll('#todo-list li').forEach(function(li) {
        items.push({
            text: li.textContent.replace('×', '').trim(),
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('todoList', JSON.stringify(items));
}

function loadList() {
    const items = JSON.parse(localStorage.getItem('todoList') || '[]');
    items.forEach(function(item) {
        addItemToList(item.text);
        if (item.completed) {
            document.querySelectorAll('#todo-list li:last-child')[0].classList.add('completed');
        }
    });
}

loadList();

```

## Output : 

### Adding to-do tasks to the list :

![img1](https://github.com/anto-richard/to-do-list-using-js/assets/93427534/a41123ea-f64c-48c9-98fc-73a56b17b797)

### The completed to-do tasks are scored out :

![img2](https://github.com/anto-richard/to-do-list-using-js/assets/93427534/ce9f0be7-51f0-4f25-8d97-c26c93df44f3)

### The completed process are removed by pressing the "X" button :

![img3](https://github.com/anto-richard/to-do-list-using-js/assets/93427534/adf2d812-8c02-4fa5-8c0c-b2f8d9bbc5d7)

## Result :

Thus, the to-do list is successfully implemented using html, css and javascript and also it can add new tasks as well as it can note down the completed tasks and also it is able to remove the completed tasks. All of these processes are carried out by each event listener in the script.js file.


