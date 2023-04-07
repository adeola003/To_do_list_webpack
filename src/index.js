import './style.css';
import {
  addTask, loadFromStorage, add,
  displayTasks, userEntry
} from './functions.js';

// load tasks from the storage

loadFromStorage();

// event listener to add new tasks

addTask.addEventListener('click', () =>{
  const taskDescr = userEntry.value;
  add(taskDescr);
});

// display the tasks list

displayTasks();
