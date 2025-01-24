const article = document.createElement("article");
article.style.border = "1px solid black";
article.style.padding = "10px";
const h1 = document.createElement("h1");
h1.innerText = "피자스쿨";
const button = document.createElement("button");
button.innerText = "페퍼로니 피자";
const pizza = () => {
  alert("핏짜");
};
button.addEventListener("click", () => {
  pizza();
});

article.appendChild(h1);
article.appendChild(button);

document.body.appendChild(article);
