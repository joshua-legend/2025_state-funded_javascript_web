//1. 원시적인 방법으로 구현하셈
//2. 반복되는 패턴 죽임[마술상자]
//3. 코드가 하드코딩(=유연한 코드인지)이 아닌지

const countryList = document.querySelector("#countryList");
const capital = document.querySelector("#capital");
const desc = document.querySelector("#desc");

const country = [
  { capital: "london", nation: "England" },
  { capital: "paris", nation: "France" },
  { capital: "tokyo", nation: "Japan" },
  { capital: "seoul", nation: "Korea" },
  { capital: "new Delhi", nation: "India" },
  { capital: "beijing ", nation: "China" },
  { capital: "canberra", nation: "Australia" },
];

country.forEach((v) => {
  const li = document.createElement("li");
  li.innerHTML = v.capital;
  li.addEventListener("click", () => {
    capital.innerHTML = v.capital;
    desc.innerHTML = `${v.capital}  is the capital city of ${v.nation}`;
  });
  countryList.appendChild(li);
});
