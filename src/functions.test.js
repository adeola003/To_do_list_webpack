global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

const { JSDOM } = require('jsdom');
import { add, removeTask, stringLength, tasksArray } from "./functions";

test('stringLength returns the correct length of a string', () => {
  // test code here
});


test('add function should add a new task to the tasks array', () => {
    // Arrange
    const newTask = 'New Task';
  
    // Act
    add(newTask);
  
    // Assert
    expect(tasksArray[0].description).toBe(newTask);
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

//   import exports = require("enhanced-resolve");

