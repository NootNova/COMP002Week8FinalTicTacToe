
const cells = document.querySelectorAll(".game-square");

cells.forEach(cell => cell.addEventListener("click", updateCell));

const fieldArray = ["", "", "", "", "", "", "", "", ""]


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

function switchPlayer() {

    if(currentPlayer =='X') {

       return currentPlayer = 'O';

    }else if (currentPlayer == 'O') {
        
        return currentPlayer = 'X';

    };

};

function updateCell() {

    const cellIndex = this;

    console.log("Cell was clicked!");

    console.log(cellIndex);

    console.log(fieldArray);

    console.log(currentPlayer);

    cellIndex.textContent = currentPlayer;

    switchPlayer();

};

function restartGame() {

    console.log("Button was clicked!");

    startGame();

};
