const redButton = document.querySelector("#red");
const blueButton = document.querySelector("#blue");
const greenButton = document.querySelector("#green");
const squareButton = document.querySelector("#square");
const softButton = document.querySelector("#soft");
const hardButton = document.querySelector("#hard");
const smallButton = document.querySelector("#small");
const mediumButton = document.querySelector("#medium");
const largeButton = document.querySelector("#large");
const box = document.querySelector(".box");

const colorBox = ["red", "blue", "green"];
redButton.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("red");
});
blueButton.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("blue");
});
greenButton.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("green");
});
