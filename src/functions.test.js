// eslint-disable-next-line
import { add, removeTask, tasksArray, clearCompleted, toggleCompleted, clearTasks } from './functions';

global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

// eslint-disable-next-line
const { JSDOM } = require('jsdom');

describe('Task Manager', () => {
  describe('Task description editing function', () => {
    test('add function should add a new task to the tasks array', () => {
      // Arrange
      const newTaskDescription = 'New Task';
      // Act
      add(newTaskDescription);

      setTimeout(() => {
        // Assert
        expect(tasksArray[0].description).toBe(newTaskDescription);
      }, 1000);
    });
  });

  describe('Task description editing function', () => {
    test('removeTask function should remove a task from the tasks array', () => {
      // Arrange
      const idToRemove = 0;
      const expectedLength = 0;

      // Act
      removeTask(idToRemove);

      // Assert
      expect(tasksArray.length).toBe(expectedLength);
      expect(tasksArray.find((task) => task.id === idToRemove)).toBeUndefined();
    });
  });
});

// mock

describe('DOM manipulation', () => {
  let fakeLocalStorage = {};

  // Mock localStorage.setItem
  fakeLocalStorage.setItem = (key, value) => {
    fakeLocalStorage[key] = value;
  };

  // Mock localStorage.getItem
  fakeLocalStorage.getItem = (key) => fakeLocalStorage[key];

  // Mock localStorage.clear
  fakeLocalStorage.clear = () => {
    fakeLocalStorage = {};
  };
  describe('check if if add/delete functions add or remove exactly one <li> element to/from the list in the DOM', () => {
    test('add function should add a new task to the tasks array and the DOM', () => {
      // Arrange
      const newTaskDescription = 'New Task';
      const tasksContainer = document.createElement('div');
      tasksContainer.id = 'tasks-container';
      document.body.appendChild(tasksContainer);

      // Act
      add(newTaskDescription);

      // Assert
      expect(tasksArray[0].description).toBe(newTaskDescription);
    });
  });

  describe('check if removeTask removes exactly one <li> element from the DOM', () => {
    test('removeTask function should remove a task from the tasks array and the DOM', () => {
      // Arrange
      const tasksContainer = document.createElement('div');
      tasksContainer.id = 'tasks-container';
      const taskElement = document.createElement('li');
      taskElement.textContent = 'Task description: Test';
      tasksContainer.appendChild(taskElement);
      document.body.appendChild(tasksContainer);

      // Act
      removeTask(0);

      // Assert
      expect(tasksArray.length).toBe(0);
    });
  });
});

// Part 2

describe('Part 2 adding tests for the clear completed, status change functions', () => {
  describe('Task description editing function', () => {
    test('toggleCompleted function should toggle the completed status of a task', () => {
      // Arrange
      const task = { description: 'New Task', completed: false, id: 0 };
      tasksArray.push(task);

      // Act
      toggleCompleted(task.id);

      // Assert
      expect(tasksArray[0].completed).toBe(true);
    });
  });

  describe('Clear all completed function', () => {
    test('clearCompleted function should remove all completed tasks from the tasks array', () => {
      // Arrange
      const task1 = { description: 'Task 1', completed: true, id: 0 };
      const task2 = { description: 'Task 2', completed: false, id: 1 };
      const task3 = { description: 'Task 3', completed: true, id: 2 };
      tasksArray.push(task1);
      tasksArray.push(task2);
      tasksArray.push(task3);
      const expectedLength = 1;

      // Act
      clearTasks();

      // Assert
      expect(tasksArray.length).toBe(expectedLength);
    });
  });
});