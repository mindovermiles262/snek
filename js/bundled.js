/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "direction", function() { return direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsInGrid", function() { return columnsInGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowsInGrid", function() { return rowsInGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pixelSize", function() { return pixelSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__movement_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameplay_js__ = __webpack_require__(1);



// Initialize Vars
const container = document.getElementById("container")
const pixel = document.createElement("div")
const rowsInGrid = 15;
const columnsInGrid = 15;
const pixelSize = 15;
let direction = "r"
let moveSpeed = 400
let grid = {}

// Run game
function game() {
  // Initialize Game
  __WEBPACK_IMPORTED_MODULE_1__gameplay_js__["d" /* initGrid */](rowsInGrid, columnsInGrid)
  let gameOver = false;
  let score = 0
  let snake = [[7,1], [7,2], [7,3], [7,4], [7,5]]
  __WEBPACK_IMPORTED_MODULE_0__movement_js__["d" /* printSnake */](snake)
  let nugget = __WEBPACK_IMPORTED_MODULE_0__movement_js__["c" /* newNugget */](snake)
  document.addEventListener("keydown", function(event) { 
    if (event.keyCode == 37) {
      direction = "l"
    } else if (event.keyCode == 38) {
      direction = "u"
    } else if (event.keyCode == 39) {
      direction = "r"
    } else if (event.keyCode == 40) {
      direction = "d"
    } else {
      direction = "quit"
    }
  }, false)

  // Run Game
  let run = setInterval(function() {
    gameOver = __WEBPACK_IMPORTED_MODULE_0__movement_js__["b" /* move */](snake)
    let eat = __WEBPACK_IMPORTED_MODULE_0__movement_js__["a" /* eatNugget */](nugget, snake, score)
    if (typeof eat === "number") {
      score = eat
      console.log(moveSpeed)
      snake.push(nugget)
      nugget = __WEBPACK_IMPORTED_MODULE_0__movement_js__["c" /* newNugget */](snake)
    }
    if (gameOver === true) {
      __WEBPACK_IMPORTED_MODULE_1__gameplay_js__["c" /* gameExit */](run)
    }
  }, moveSpeed);
}

game()



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkCollideTail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkCollideWall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return gameExit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return initGrid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(0);


// Initializes Empty Grid to Screen
function initGrid(rows, columns) {
  // Set container size based on .pixel width
  const widthCalculation = (__WEBPACK_IMPORTED_MODULE_0__main_js__["pixelSize"] * columns) + (columns * 2)
  container.style.width = widthCalculation + "px"

  // Make grid
  for (let i = 0; i < rows; i++) {
    let currentRow = "row" + i
    __WEBPACK_IMPORTED_MODULE_0__main_js__["grid"][currentRow] = new Array(columns).fill("0")
    __WEBPACK_IMPORTED_MODULE_0__main_js__["grid"][currentRow].forEach(function (element, index) {
      container.appendChild(document.createElement("div")).className = "pixel"
    })
  }

  // Set Pixel width and Height
  document.querySelectorAll(".pixel").forEach(function (p) {
    p.style.width = __WEBPACK_IMPORTED_MODULE_0__main_js__["pixelSize"] + "px";
    p.style.height = __WEBPACK_IMPORTED_MODULE_0__main_js__["pixelSize"] + "px"
  })
}

function checkCollideTail(snake) {
  let endGame = false;
  let headLoc = snake.pop()
  snake.forEach(function (ele) {
    if (JSON.stringify(ele) === JSON.stringify(headLoc)) {
      endGame = true;
    }
  })
  if (endGame === false) {
    snake.push(headLoc)
  } else {
    return true
  }
}

function checkCollideWall(snake) {
  let headLoc = snake.pop()
  if (headLoc[1] == __WEBPACK_IMPORTED_MODULE_0__main_js__["columnsInGrid"]) {
    console.log("You ran into the right wall")
    return true
  } else if (headLoc[1] < 0) {
    console.log("You ran into the left wall")
    return true
  } else if (headLoc[0] < 0) {
    console.log("You ran into the top wall")
    return true
  } else if (headLoc[0] == __WEBPACK_IMPORTED_MODULE_0__main_js__["rowsInGrid"]) {
    console.log("You ran into the bottom wall")
    return true
  }
  snake.push(headLoc)
}

function gameExit(interval) {
  clearInterval(interval)
  document.getElementById("gameover").innerText = "Game Over"
  console.log("Game Over")
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export moveRight */
/* unused harmony export moveLeft */
/* unused harmony export moveUp */
/* unused harmony export moveDown */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return printSnake; });
/* unused harmony export tailDock */
/* unused harmony export printNugget */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return newNugget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eatNugget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameplay_js__ = __webpack_require__(1);

 

function moveRight(snake) {
  let headLoc = snake[snake.length - 1]
  snake.push([headLoc[0], headLoc[1] + 1])
  if (Object(__WEBPACK_IMPORTED_MODULE_1__gameplay_js__["b" /* checkCollideWall */])(snake) == true) { return true }
  printSnake(snake)
  tailDock(snake.shift())
  return Object(__WEBPACK_IMPORTED_MODULE_1__gameplay_js__["a" /* checkCollideTail */])(snake);
}

function moveLeft(snake) {
  let headLoc = snake[snake.length - 1]
  snake.push([headLoc[0], headLoc[1] - 1])
  if (Object(__WEBPACK_IMPORTED_MODULE_1__gameplay_js__["b" /* checkCollideWall */])(snake) == true) { return true }
  printSnake(snake)
  tailDock(snake.shift())
  return Object(__WEBPACK_IMPORTED_MODULE_1__gameplay_js__["a" /* checkCollideTail */])(snake);
}

function moveUp(snake) {
  let headLoc = snake[snake.length - 1];
  snake.push([headLoc[0] - 1, headLoc[1]])
  if (Object(__WEBPACK_IMPORTED_MODULE_1__gameplay_js__["b" /* checkCollideWall */])(snake) == true) { return true }
  printSnake(snake)
  tailDock(snake.shift())
  return Object(__WEBPACK_IMPORTED_MODULE_1__gameplay_js__["a" /* checkCollideTail */])(snake);
}

function moveDown(snake) {
  let headLoc = snake[snake.length - 1];
  snake.push([headLoc[0] + 1, headLoc[1]])
  if (Object(__WEBPACK_IMPORTED_MODULE_1__gameplay_js__["b" /* checkCollideWall */])(snake) == true) { return true }
  printSnake(snake)
  tailDock(snake.shift())
  return Object(__WEBPACK_IMPORTED_MODULE_1__gameplay_js__["a" /* checkCollideTail */])(snake);
}

function move(snake) {
  if (__WEBPACK_IMPORTED_MODULE_0__main_js__["direction"] === "r") {
    return moveRight(snake)
  } else if (__WEBPACK_IMPORTED_MODULE_0__main_js__["direction"] == "l") {
    return moveLeft(snake)
  } else if (__WEBPACK_IMPORTED_MODULE_0__main_js__["direction"] == 'u') {
    return moveUp(snake)
  } else if (__WEBPACK_IMPORTED_MODULE_0__main_js__["direction"] == 'd') {
    return moveDown(snake)
  } else if (__WEBPACK_IMPORTED_MODULE_0__main_js__["direction"] == "quit") {
    console.log("Quit")
    return true;
  }
}

// Changes background color of .pixel based on x,y pair (x[0] is top row)
function printSnake(snake) {
  snake.forEach(function ([x, y]) {
    let divLoc = ((__WEBPACK_IMPORTED_MODULE_0__main_js__["rowsInGrid"] * x) + y)
    let divs = document.getElementsByClassName("pixel")
    divs[divLoc].style.backgroundColor = "goldenrod"
  })
}

function newNugget(snake) {
  let nugRow = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__main_js__["rowsInGrid"]);
  let nugCol = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__main_js__["columnsInGrid"]);
  let divLoc = (nugRow * __WEBPACK_IMPORTED_MODULE_0__main_js__["columnsInGrid"]) + nugCol
  let divs = document.getElementsByClassName("pixel")
  divs[divLoc].style.backgroundColor = "red";
  return [nugRow, nugCol]
}

function eatNugget(nugLoc, snake, score) {
  let headLoc = snake[snake.length - 1];
  if (JSON.stringify(headLoc) == JSON.stringify(nugLoc)) {
    let newScore = score + 10
    document.getElementById("score").innerText = newScore
    return newScore
  }
}

// Remove last node of snake
function tailDock([x, y]) {
  let divLoc = ((__WEBPACK_IMPORTED_MODULE_0__main_js__["rowsInGrid"] * x) + y);
  let divs = document.getElementsByClassName("pixel")
  divs[divLoc].style.backgroundColor = "var(--bg-color)"
}



/***/ })
/******/ ]);