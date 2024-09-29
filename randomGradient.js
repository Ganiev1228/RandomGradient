const value = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
];
const body = document.querySelector("body");
const container = document.querySelector(".container");
const gradientInfo = document.querySelector(".gradient-info");

function createGradient() {
  let color1 = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.trunc(Math.random() * value.length);
    color1 += value[random];
  }
  return color1;
}

function setGradient() {
  const theme1 = createGradient();
  const theme2 = createGradient();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(
    ${randomDeg}deg,
    ${theme1},
    ${theme2})`;
  body.style.background = bgColor;
  gradientInfo.textContent = bgColor;
}
container.addEventListener("click", () => {
  setGradient();
});
