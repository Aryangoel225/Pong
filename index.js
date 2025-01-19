const gameboard = document.querySelector("#gameBoard");
const ctx = gameboard.getContext("2d");
const scoreText = document.querySelector("scoreText");
const resetBtn = document.querySelector("resetBtn");
const gameWidth = gameboard.width;
const gameHeight = gameboard.height;
const boardBackground = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballRadius = 12.5;
const paddleSpeed = 50;
let intervalID;
let ballSpeed = 1;
let ballX = gameWidth /2;
let ballY = gameHeight /2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 ={
    width: 25,
    height: 100,
    x: 0,
    y: 0
}
let paddle2 ={
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100
}

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetBtn);

