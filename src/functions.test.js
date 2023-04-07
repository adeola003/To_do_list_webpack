
// eslint-disable-next-line
import { add, removeTask, tasksArray } from './functions';

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