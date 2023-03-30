// Lodash, now imported by this script
// import _ from 'lodash';
// import './style.css';

// Constants and variables
const tasksList = document.getElementById('tasks-list');
// const userEntry = document.getElementById('user-entry');
// const addTask = document.getElementById('add-task');

// Array of objects containing tasks details
const tasksInfo = [
  {
    description: 'Join my standup call',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete some Javascript challenges',
    completed: false,
    index: 1,
  },
  {
    description: 'Run errands for home',
    completed: false,
    index: 2,
  },
];

const displaysTasks = () => {
  tasksInfo.forEach((task) => {
    const listElement = document.createElement('li');
    listElement.classList.add('list-element');
    listElement.innerHTML = `
        <label for="task${task.index}">
            <input id="task${task.index}" type="checkbox"> ${task.description}
        </label>
        `;
    tasksList.appendChild(listElement);
  });
  // console.log(tasksList);
};

displaysTasks();
