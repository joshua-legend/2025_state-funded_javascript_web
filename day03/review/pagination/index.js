const list = ["#one", "#two", "#three", "#four", "#five", "#six"];

list.forEach((v) => {
  const target = document.querySelector(v);
  target.addEventListener("click", () => {
    list.forEach((v1) => {
      const button = document.querySelector(v1);
      button.style.backgroundColor = "white";
    });
    target.style.backgroundColor = "#3498db";
  });
});
