import './style.css';
import {
  addTask, loadFromStorage, add,
  removeTask, displayTasks, clearCompleted,
} from './functions.js';

// load tasks from the storage

loadFromStorage();

// event listener to add new tasks
addTask.addEventListener('click', add);

// display the tasks list

displayTasks();

// change completed status when the checkbox is checked or not

// const checkbox = document.getElementById('check');
// checkbox.addEventListener;

// Clear completed tasks

clearCompleted.addEventListener('click', removeTask);
