"use strict";
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    nav.classList.add("active_nav");
  } else {
    nav.classList.remove("active_nav");
  }
});
/************************* */
const select = document.querySelector(".select-bar");
const selectOption = document.querySelector(".select-option");
const dwnArr = document.querySelector(".dwnArr");
const upArr = document.querySelector(".upArr");

select.addEventListener("click", () => {
  let hasClass = selectOption.classList.contains("active") ? true : false;
  console.log(hasClass);
  if (hasClass) {
    selectOption.classList.remove("active");
    upArr.classList.remove("active");
    dwnArr.classList.add("active");
  } else {
    selectOption.classList.add("active");

    dwnArr.classList.remove("active");
    upArr.classList.add("active");
  }
});
