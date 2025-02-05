import { data } from "./data.js";

const test = document.querySelector("#test");

const { search } = location;
const [_, value] = search.split("=");

test.innerHTML = `이름:${data[value].name} 나이:${data[value].age}`;
