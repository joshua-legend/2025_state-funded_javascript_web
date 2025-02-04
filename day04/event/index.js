const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  const { target } = e;
  const { innerHTML } = target;
  target.innerHTML = innerHTML == "😎" ? "😊" : "😎";
});

const input = document.querySelector("#input");

input.addEventListener("input", (e) => {
  const { target } = e;
  console.log(target.value);
});
