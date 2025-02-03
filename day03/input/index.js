const input = document.querySelector("#input");
const icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
  if (icon.innerHTML == "😶") {
    icon.innerHTML = "😎";
    input.type = "password";
  } else {
    icon.innerHTML = "😶";
    input.type = "text";
  }
});
