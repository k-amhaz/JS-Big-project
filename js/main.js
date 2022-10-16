let bgInter;
let bgOption = true;

let mainColors = localStorage.getItem("color");
const colorLi = document.querySelectorAll(".settings li");
let thePage = document.querySelector(".page");

let bgOptionLocal = localStorage.getItem("bgOption");

if (bgOptionLocal != null) {
  if (bgOptionLocal === "true") {
    bgOption = true;
  } else if (bgOptionLocal === "false") {
    bgOption = false;
  }
}

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

bgButtons.forEach((el) => {
  el.addEventListener("click", (e) => {
    activationRmv(bgButtons);
    e.target.classList.add("active");
    if (e.target.dataset.option === "yes") {
      bgOption = true;
      bgInterval();
      localStorage.setItem("bgOption", true);
    } else if (e.target.dataset.option === "no") {
      bgOption = false;
      clearInterval(bgInter);
      localStorage.setItem("bgOption", false);
    }
  });
});

function bgInterval() {
  if (bgOption === true) {
    bgInter = setInterval(() => {
      let imgIndex = Math.floor(Math.random() * imgsArray.length);

      landing.style.backgroundImage = `url(../assets/${imgsArray[imgIndex]})`;
    }, 2000);
  }
}
bgInterval();
