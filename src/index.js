import './style.css';
import {
  addTask, loadFromStorage, add,
  displayTasks,
} from './functions.js';

// load tasks from the storage

loadFromStorage();

// event listener to add new tasks
addTask.addEventListener('click', add);

// display the tasks list

displayTasks();
