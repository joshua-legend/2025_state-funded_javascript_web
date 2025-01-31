const redButton = document.querySelector(".red");
const blueButton = document.querySelector(".blue");
const greenButton = document.querySelector(".green");
const squareButton = document.querySelector(".square");
const softButton = document.querySelector(".soft");
const hardButton = document.querySelector(".hard");
const smallButton = document.querySelector(".small");
const mediumButton = document.querySelector(".medium");
const largeButton = document.querySelector(".large");

const box = document.querySelector(".box");

redButton.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
blueButton.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});
greenButton.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});

squareButton.addEventListener("click", () => {
  box.style.borderRadius = "0px";
});
softButton.addEventListener("click", () => {
  box.style.borderRadius = "30px";
});
hardButton.addEventListener("click", () => {
  box.style.borderRadius = "9999px";
});

smallButton.addEventListener("click", () => {
  box.style.width = "100px";
  box.style.height = "100px";
});

mediumButton.addEventListener("click", () => {
  box.style.width = "200px";
  box.style.height = "200px";
});

largeButton.addEventListener("click", () => {
  box.style.width = "300px";
  box.style.height = "300px";
});
