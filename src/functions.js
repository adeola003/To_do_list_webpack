// eslint-disable-next-line
let tasksArray = [];
const tasksContainer = document.getElementById('tasks-container');
const addTask = document.getElementById('add-task');
const clearCompleted = document.getElementById('clear');
const userEntry = document.getElementById('user-entry');

// Storage

const updateStorage = (data) => {
  localStorage.setItem('tasks', JSON.stringify(data));
};

// Function to add new tasks
const add = (newDescription) => {
  const task = { description: newDescription, completed: '', id: '' };
  task.completed = false;
  task.id = tasksArray.length;
  tasksArray.push(task);
  // update the id of the remaining tasks
  tasksArray.forEach((task, index) => {
    task.id = index;
  });
  updateStorage(tasksArray);
};

// remove a task from the array
const removeTask = (id) => {
  if (tasksArray !== undefined) {
    tasksArray = tasksArray.filter((task) => task.id !== id);
    // update the id of the remaining tasks
    tasksArray.forEach((task, index) => {
      task.id = index;
    });

    updateStorage(tasksArray);
  }
};

// function to changed the status of the task
const toggleCompleted = (id) => {
  const task = tasksArray.find((t) => t.id === id);
  task.completed = !task.completed;
  updateStorage(tasksArray);
};

const clearTasks = () => {
  tasksArray = tasksArray.filter((task) => task.completed === false);
  // update the id of the remaining tasks
  tasksArray.forEach((task, index) => {
    task.id = index;
  });
};

// Function to display the book's list

const displayTasks = () => {
  tasksContainer.innerHTML = '';
  tasksArray.forEach((task) => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task-div');
    taskElement.style.display = 'flex';
    taskElement.style.columnGap = '10px';
    taskElement.style.alignItems = 'baseline';
    taskElement.innerHTML = `
        <input id="check-${task.id}" type="checkbox" ${task.completed ? 'checked' : ''}>
        <p>Task description: ${task.description}</p>
        <button class="remove" id=remove-task>Remove</button>
        `;

    tasksContainer.appendChild(taskElement);
    // checkbox feature

    const checkbox = taskElement.querySelector(`#check-${task.id}`);
    checkbox.addEventListener('change', () => {
      toggleCompleted(task.id);
    });

    // clear completed
    clearCompleted.addEventListener('click', () => {
      clearTasks();
      updateStorage(tasksArray);
      displayTasks();
    });
    // remove task feature
    const toTrash = taskElement.querySelector('.remove');
    toTrash.addEventListener('click', () => {
      removeTask(task.id);
      displayTasks();
    });
  });
};

// load from storage
const loadFromStorage = () => {
  const storedTasksList = localStorage.getItem('tasks');
  if (storedTasksList) {
    tasksArray = JSON.parse(storedTasksList);
    displayTasks();
  }
};

export {
  clearTasks,
  addTask, clearCompleted, userEntry,
  updateStorage, loadFromStorage,
  add, removeTask, displayTasks, toggleCompleted, tasksArray,
};
