let tasksArray = [];
const tasksContainer = document.getElementById('tasks-container');
const userEntry = document.getElementById('user-entry');
const addTask = document.getElementById('add-task');
const clearCompleted = document.getElementById('clear');

// Storage

const updateStorage = (data) => {
  localStorage.setItem('tasks', JSON.stringify(data));
}

const loadFromStorage = () => {
  const storedTasksList = localStorage.getItem('tasks');
  if (storedTasksList) {
    tasksArray = JSON.parse(storedTasksList);
    displayTasks();
  }
}

// Function to add new tasks
const add = () => {
  const task = { description: '', completed: '', id:''};
  task.description = userEntry.value;
  task.completed = false;
  task.id = tasksArray.length
  tasksArray.push(task);
  updateStorage(tasksArray);
  console.log(tasksArray);
}

// Remove completed tasks function (i did not realize this was for the next project)

const removeCompTask = () => {
  tasksArray = tasksArray.filter((task) => task.completed !== true);
  updateStorage(tasksArray);
}

//remove a task from the array
const removeTask = (id) => {
  tasksArray = tasksArray.filter((task) => task.id !== id);
  updateStorage(tasksArray);
}

// Function to display the book's list

const displayTasks = () => {
  document.getElementById('tasks-container').innerHTML = '';
  tasksArray.forEach((task) => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task-div');
    taskElement.innerHTML = `
        <input id="check" type="checkbox">
        <p>Book title: ${task.description}</p>
        <button class="remove" id=remove-task>Remove</button>
        `;
    tasksContainer.appendChild(taskElement);
    const toTrash = taskElement.querySelector('.remove');
    toTrash.addEventListener('click', () => {
      removeTask(task.id);
      displayTasks();
    });
  });
}

// Event listener to add books

// submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (bookTitle.value !== '' && author.value !== '') {
//     addBooks(bookTitle.value, author.value);
//     form.reset();
//     displayBooks();
//   } else {
//     alert('fill the required fields before submiting!');
//   }
// });
// document.addEventListener('DOMContentLoaded', () => {
//   loadFromStorage();
// });
export {tasksArray, tasksContainer, userEntry, addTask, clearCompleted, updateStorage, loadFromStorage, add, removeTask, displayTasks}