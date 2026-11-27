
const square = document.querySelector(".game-square");

const cell0 = document.querySelector("#square-0");

cell0.addEventListener("click", updateCell);

const cell1 = document.querySelector("#square-1");

cell1.addEventListener("click", updateCell);

const cell2 = document.querySelector("#square-2");

cell2.addEventListener("click", updateCell);

const cell3 = document.querySelector("#square-3");

cell3.addEventListener("click", updateCell);

const cell4 = document.querySelector("#square-4");

cell4.addEventListener("click", updateCell);

const cell5 = document.querySelector("#square-5");

cell5.addEventListener("click", updateCell);

const cell6 = document.querySelector("#square-6");

cell6.addEventListener("click", updateCell);

const cell7 = document.querySelector("#square-7");

cell7.addEventListener("click", updateCell);

const cell8 = document.querySelector("#square-8");

cell8.addEventListener("click", updateCell);

const playingField = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8];




const playAgain = document.querySelector("#button-play-again");

playAgain.addEventListener("click", restartGame);

const xScore = document.querySelector("#scoreboard-x");

const oScore = document.querySelector("#scoreboard-o");

const winCondtions = [

/* rows */

    [0, 1, 2],

    [3, 4, 5],

    [6, 7, 8],

/* columns */

    [0, 3, 6],

    [1, 4, 7],

    [2, 5, 8],

/* Across */

    [0, 4, 8],

    [2, 4, 6],

];

let currentPlayer = "X";

let running = false;

startGame();

function startGame() {

    running = true;

};

function updateCell() {

    console.log("Cell was clicked!");

    console.log(playingField);

    square.textContent + currentPlayer;

};

function restartGame() {

    console.log("Button was clicked!");

    startGame();

};
