const list = [
  { id: "home", desc: "home is something", bg: "red" },
  { id: "news", desc: "news abcd ....", bg: "green" },
  { id: "contacts", desc: "contacts 하지마셈", bg: "blue" },
  { id: "about", desc: "about 모르겠음", bg: "yellow" },
];

const contents = document.querySelector("#contents");
const title = document.querySelector("#title");
const desc = document.querySelector("#desc");

list.forEach((v) => {
  const btn = document.querySelector("#" + v.id);
  btn.addEventListener("click", () => {
    list.forEach((v) => {
      const target = document.querySelector("#" + v.id);
      target.style.backgroundColor = "#efefef";
      target.style.color = "black";
    });
    btn.style.backgroundColor = v.bg;
    btn.style.color = "white";
    contents.style.backgroundColor = v.bg;
    title.innerHTML = v.id;
    desc.innerHTML = v.desc;
  });
});
