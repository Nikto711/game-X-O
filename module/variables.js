/* all the variable */ 
export let game = {
  X_CLASS: "x",
  Y_CLASS: "y",
  turn: undefined,
  winner: null,
  selectedProfile: document.querySelectorAll(".img .id"),
  blockElements: document.querySelectorAll("[data-cell]"),
  boardElement: document.querySelector("#board"),
  startBtn: document.querySelector("#startBtn"),
  startWindow: document.querySelector(".game-start"),
  restartBtn: document.getElementById("restartBtn"),
  drawBtn: document.getElementById("drawBtn"),
  winnerImg: document.querySelector(".winner-msg .winner"),
  winEl: document.querySelector(".winner-msg"),
  drawEl: document.querySelector(".draw-msg"),
};