/*
Завдання 1.
Необхідно реалізувати наступний функціонал як на відео scroll, а саме:

при скролі текст “scroll down” збільшує розмір тексту
далі блок з текстом “slide from left” зміщує чуть позицію вправо а також збільшується лінія підкреслення
далі картинка(можна використати будь яку) зміщується вліво
ну і в кінці текст “scroll up” зменшує розмір тексту
при кліку на “scroll down” відбувається автоматичний скрол до блоку “slide from left”
при кліку на “scroll up” відбувається автоматичний скрол до верху сторінки
------------------------------------------------------------------------------------------
*/

const scrollDownButton = document.querySelector(".scrollDownButton");
const slideFromLeft = document.querySelector(".slideFromLeft");
const underline = document.querySelector(".underline");
const imageContainer = document.querySelector(".image-container");
const scrollUpButton = document.querySelector(".scrollUpButton");
const scrollDown = document.querySelector(".scrollDown");
const scrollContainer = document.querySelector(".scroll-container");

window.addEventListener("scroll", () => {
  if (window.scrollY <= 490) {
    scrollDownButton.style.fontSize = `${45 + window.scrollY * 0.07}px`;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200 && window.scrollY <= 700) {
    slideFromLeft.style.left = `${window.scrollY / 6}px`;
    underline.style.width = `${170 + window.scrollY / 4}px`;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 370) {
    imageContainer.style.right = `${window.scrollY / 6}px`;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    scrollUpButton.style.fontSize = `${200 - window.scrollY / 10}px`;
  }
});

scrollDownButton.addEventListener("click", () => {
  scrollContainer.scrollIntoView({ behavior: "smooth" });
});
scrollUpButton.addEventListener("click", () => {
  scrollDown.scrollIntoView({ behavior: "smooth" });
});
