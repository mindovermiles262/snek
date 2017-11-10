import { direction, rowsInGrid, columnsInGrid, score } from './main.js';
import { checkCollideTail as checkCollideTail, checkCollideWall as checkCollideWall } from './gameplay.js' 

function moveRight(snake) {
  let headLoc = snake[snake.length - 1]
  snake.push([headLoc[0], headLoc[1] + 1])
  if (checkCollideWall(snake) == true) { return true }
  printSnake(snake)
  tailDock(snake.shift())
  return checkCollideTail(snake);
}

function moveLeft(snake) {
  let headLoc = snake[snake.length - 1]
  snake.push([headLoc[0], headLoc[1] - 1])
  if (checkCollideWall(snake) == true) { return true }
  printSnake(snake)
  tailDock(snake.shift())
  return checkCollideTail(snake);
}

function moveUp(snake) {
  let headLoc = snake[snake.length - 1];
  snake.push([headLoc[0] - 1, headLoc[1]])
  if (checkCollideWall(snake) == true) { return true }
  printSnake(snake)
  tailDock(snake.shift())
  return checkCollideTail(snake);
}

function moveDown(snake) {
  let headLoc = snake[snake.length - 1];
  snake.push([headLoc[0] + 1, headLoc[1]])
  if (checkCollideWall(snake) == true) { return true }
  printSnake(snake)
  tailDock(snake.shift())
  return checkCollideTail(snake);
}

function move(snake) {
  if (direction === "r") {
    return moveRight(snake)
  } else if (direction == "l") {
    return moveLeft(snake)
  } else if (direction == 'u') {
    return moveUp(snake)
  } else if (direction == 'd') {
    return moveDown(snake)
  } else if (direction == "quit") {
    console.log("Quit")
    return true;
  }
}

// Changes background color of .pixel based on x,y pair (x[0] is top row)
function printSnake(snake) {
  snake.forEach(function ([x, y]) {
    let divLoc = ((rowsInGrid * x) + y)
    let divs = document.getElementsByClassName("pixel")
    divs[divLoc].style.backgroundColor = "goldenrod"
  })
}

function newNugget(snake) {
  let nugRow = Math.floor(Math.random() * rowsInGrid);
  let nugCol = Math.floor(Math.random() * columnsInGrid);
  let divLoc = (nugRow * columnsInGrid) + nugCol
  let divs = document.getElementsByClassName("pixel")
  divs[divLoc].style.backgroundColor = "red";
  return [nugRow, nugCol]
}

function eatNugget(nugLoc, snake) {
  let headLoc = snake[snake.length - 1];
  if (JSON.stringify(headLoc) == JSON.stringify(nugLoc)) {
    console.log("EAT")
    return true
  }
}

// Remove last node of snake
function tailDock([x, y]) {
  let divLoc = ((rowsInGrid * x) + y);
  let divs = document.getElementsByClassName("pixel")
  divs[divLoc].style.backgroundColor = "var(--bg-color)"
}

export{ moveRight, moveLeft, moveUp, moveDown, move, printSnake, tailDock, printNugget, newNugget, eatNugget };