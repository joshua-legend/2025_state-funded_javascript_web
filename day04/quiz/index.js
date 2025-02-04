import { changeLight } from "./func.js";

const input = document.querySelector("#input");
const special = document.querySelector("#special");
const charLength = document.querySelector("#charLength");
const checkButton = document.querySelector("#checkButton");

const specialList = [..."!@#$"];

input.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;
  const isLengthValid = 6 <= length && length <= 20;
  const isSpecialValid = specialList.some((v) => value.includes(v));
  changeLight(charLength, isLengthValid);
  changeLight(special, isSpecialValid);
  changeLight(checkButton, isLengthValid && isSpecialValid);
});
