let mainColors = localStorage.getItem("color");
const colorLi = document.querySelectorAll(".settings li");
let thePage = document.querySelector(".page");

if (mainColors != null) {
  document.documentElement.style.setProperty("--main-color", mainColors);

  activationRmv(colorLi);
  activationAdColors();
}
let settingsIcon = document.querySelector(".settings > i");
let settings = document.querySelector(".settings");
let bgButtons = document.querySelectorAll(".bg-options button");

settingsIcon.onclick = function () {
  settings.classList.toggle("open");
};

thePage.onclick = () => {
  settings.classList.remove("open");
};

bgButtons.forEach((el) => {
  el.addEventListener("click", (e) => {
    activationRmv(bgButtons);
    e.target.classList.add("active");
  });
});

colorLi.forEach((el) => {
  el.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color", e.target.dataset.color);
    activationRmv(colorLi);
    e.target.classList.add("active");
  });
});

let landing = document.querySelector(".landing");

let imgsArray = ["02.jpg", "03.jpg", "05.jpg"];

setInterval(() => {
  let imgIndex = Math.floor(Math.random() * imgsArray.length);

  landing.style.backgroundImage = `url(../assets/${imgsArray[imgIndex]})`;
}, 2000);

function activationRmv(array) {
  array.forEach((el) => {
    el.classList.remove("active");
  });
}
function activationAdColors() {
  colorLi.forEach((el) => {
    if (el.dataset.color === mainColors) {
      el.classList.add("active");
    }
  });
}
