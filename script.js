// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the key DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim(); // Remove extra spaces

        // If input is empty, show an alert and exit the function
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add click functionality to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add the remove button to the task item
        li.appendChild(removeBtn);

        // Add the task item to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // When the Add button is clicked, add a task
    addButton.addEventListener('click', addTask);

    // Allow pressing "Enter" in the input field to also add the task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});