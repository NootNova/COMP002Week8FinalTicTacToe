
const cells = document.querySelectorAll(".game-square");

const playAgain = document.querySelector("#button-play-again");

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

function startGame(){

    running = true;

};
