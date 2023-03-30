/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Lodash, now imported by this script\n// import _ from 'lodash';\n// import './style.css';\n\n// Constants and variables\nconst tasksList = document.getElementById('tasks-list');\n// const userEntry = document.getElementById('user-entry');\n// const addTask = document.getElementById('add-task');\n\n// Array of objects containing tasks details\nconst tasksInfo = [\n  {\n    description: 'Join my standup call',\n    completed: false,\n    index: 0,\n  },\n  {\n    description: 'Complete some Javascript challenges',\n    completed: false,\n    index: 1,\n  },\n  {\n    description: 'Run errands for home',\n    completed: false,\n    index: 2,\n  },\n];\n\nconst displaysTasks = () => {\n  tasksInfo.forEach((task) => {\n    const listElement = document.createElement('li');\n    listElement.classList.add('list-element');\n    listElement.innerHTML = `\n        <label for=\"task${task.index}\">\n            <input id=\"task${task.index}\" type=\"checkbox\"> ${task.description}\n        </label>\n        `;\n    tasksList.appendChild(listElement);\n  });\n  // console.log(tasksList);\n};\n\ndisplaysTasks();\n\n\n//# sourceURL=webpack://to_do_list_webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;