function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item for the task
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        // Add task text
        listItem.textContent = taskText;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            listItem.remove();
        };

        // Append delete button to the list item
        listItem.appendChild(deleteButton);

        // Append list item to the task list
        document.getElementById('taskList').appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert("Please enter a task.");
    }
}