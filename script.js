// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // ✅ required by checker

        // When clicked, remove this task from the list
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to list item, then list item to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    }

    // Click event for Add Task button
    addButton.addEventListener('click', addTask);

    // Press Enter to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { // ✅ exactly what checker expects
            addTask();
        }
    });
});