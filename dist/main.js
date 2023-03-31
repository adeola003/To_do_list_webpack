"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list_webpack"] = self["webpackChunkto_do_list_webpack"] || []).push([["main"],{

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks),\n/* harmony export */   \"loadFromStorage\": () => (/* binding */ loadFromStorage),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"tasksArray\": () => (/* binding */ tasksArray),\n/* harmony export */   \"tasksContainer\": () => (/* binding */ tasksContainer),\n/* harmony export */   \"updateStorage\": () => (/* binding */ updateStorage),\n/* harmony export */   \"userEntry\": () => (/* binding */ userEntry)\n/* harmony export */ });\nlet tasksArray = [];\r\nconst tasksContainer = document.getElementById('tasks-container');\r\nconst userEntry = document.getElementById('user-entry');\r\nconst addTask = document.getElementById('add-task');\r\nconst clearCompleted = document.getElementById('clear');\r\n\r\n// Storage\r\n\r\nconst updateStorage = (data) => {\r\n  localStorage.setItem('tasks', JSON.stringify(data));\r\n}\r\n\r\nconst loadFromStorage = () => {\r\n  const storedTasksList = localStorage.getItem('tasks');\r\n  if (storedTasksList) {\r\n    tasksArray = JSON.parse(storedTasksList);\r\n    displayTasks();\r\n  }\r\n}\r\n\r\n// Function to add new tasks\r\nconst add = () => {\r\n  const task = { description: '', completed: '', id:''};\r\n  task.description = userEntry.value;\r\n  task.completed = false;\r\n  task.id = tasksArray.length\r\n  tasksArray.push(task);\r\n  updateStorage(tasksArray);\r\n  console.log(tasksArray);\r\n}\r\n\r\n// Remove completed tasks function (i did not realize this was for the next project)\r\n\r\nconst removeCompTask = () => {\r\n  tasksArray = tasksArray.filter((task) => task.completed !== true);\r\n  updateStorage(tasksArray);\r\n}\r\n\r\n//remove a task from the array\r\nconst removeTask = (id) => {\r\n  tasksArray = tasksArray.filter((task) => task.id !== id);\r\n  updateStorage(tasksArray);\r\n}\r\n\r\n// Function to display the book's list\r\n\r\nconst displayTasks = () => {\r\n  document.getElementById('tasks-container').innerHTML = '';\r\n  tasksArray.forEach((task) => {\r\n    const taskElement = document.createElement('div');\r\n    taskElement.classList.add('task-div');\r\n    taskElement.innerHTML = `\r\n        <input id=\"check\" type=\"checkbox\">\r\n        <p>Book title: ${task.description}</p>\r\n        <button class=\"remove\" id=remove-task>Remove</button>\r\n        `;\r\n    tasksContainer.appendChild(taskElement);\r\n    const toTrash = taskElement.querySelector('.remove');\r\n    toTrash.addEventListener('click', () => {\r\n      removeTask(task.id);\r\n      displayTasks();\r\n    });\r\n  });\r\n}\r\n\r\n// Event listener to add books\r\n\r\n// submitBtn.addEventListener('click', (e) => {\r\n//   e.preventDefault();\r\n//   if (bookTitle.value !== '' && author.value !== '') {\r\n//     addBooks(bookTitle.value, author.value);\r\n//     form.reset();\r\n//     displayBooks();\r\n//   } else {\r\n//     alert('fill the required fields before submiting!');\r\n//   }\r\n// });\r\n// document.addEventListener('DOMContentLoaded', () => {\r\n//   loadFromStorage();\r\n// });\r\n\n\n//# sourceURL=webpack://to_do_list_webpack/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n// import { from } from \"webpack-sources/lib/CompatSource\";\n\n\n// load tasks from the storage\n\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.loadFromStorage)();\n\n// event listener to add new tasks\n_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTask.addEventListener ('click', _functions_js__WEBPACK_IMPORTED_MODULE_0__.add);\n\n// display the tasks list\n\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.displayTasks)();\n\n//change completed status when the checkbox is checked or not\n\nconst checkbox = document.getElementById('check');\ncheckbox.addEventListener\n\n// Clear completed tasks\n\n_functions_js__WEBPACK_IMPORTED_MODULE_0__.clearCompleted.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_0__.removeTask);\n\n\n\n//# sourceURL=webpack://to_do_list_webpack/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);