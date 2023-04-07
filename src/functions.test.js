// eslint-disable-next-line
import { add, removeTask } from './functions';

global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

// eslint-disable-next-line
const { JSDOM } = require('jsdom');

const tasksArray = [];

test('stringLength returns the correct length of a string', () => {
  // test code here
});

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
