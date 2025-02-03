const click = document.querySelector("#click");
const linkList = document.querySelector("#linkList");
click.addEventListener("click", () => {
  if (linkList.style.display == "flex") {
    linkList.style.display = "none";
  } else {
    linkList.style.display = "flex";
  }
});
