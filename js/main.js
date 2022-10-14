let mainColors = localStorage.getItem("color");
document.documentElement.style.setProperty("--main-color", mainColors);

let settings = document.querySelector(".settings");

settings.onclick = function () {
  this.classList.toggle("open");
};

const colorLi = document.querySelectorAll(".settings li");

colorLi.forEach((el) => {
  el.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color", e.target.dataset.color);
    activation();
    e.target.classList.add("active");
  });
});

let landing = document.querySelector(".landing");

let imgsArray = ["02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
  let imgIndex = Math.floor(Math.random() * imgsArray.length);

  landing.style.backgroundImage = `url(../assets/${imgsArray[imgIndex]})`;
}, 2000);

function activation() {
  colorLi.forEach((el) => {
    el.classList.remove("active");
  });
}
