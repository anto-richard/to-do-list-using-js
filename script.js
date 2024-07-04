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
