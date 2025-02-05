import { makeCard, makeCard1 } from "./components/card.js";

const clothes = document.querySelector("#clothes");

const data = [
  {
    imgSrc: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "개노맛음식",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "개노맛음식",
  },
];

data.forEach((v) => {
  clothes.insertAdjacentHTML("beforeend", makeCard1(v.imgSrc, v.title));
});
