"use strict";

const btnEl = document.querySelector(".menu-bar");
const navEl = document.querySelector(".nav");
const testimonyEl = document.querySelectorAll(".testimony");
const imgBgEl = document.querySelector("#cover-img");

btnEl.addEventListener("click", () => {
  navEl.classList.toggle("open");
});

const imgEl = [
  "",
  "https://images.pexels.com/photos/5622654/pexels-photo-5622654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://plus.unsplash.com/premium_photo-1664391663837-c7aacd39200c?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/16482146/pexels-photo-16482146/free-photo-of-man-eating-big-burger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/14934066/pexels-photo-14934066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6260618/pexels-photo-6260618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

let count = 1;
function counter() {
  setTimeout(() => {
    const img = (imgBgEl.src = `${imgEl[count]}`);
    if (count >= 5) {
      img;
      count = 1;
    } else {
      count += 1;
      img;
    }
    counter();
  }, 3000);
}
counter();

testimonyEl.forEach((val) => {
  val.addEventListener("click", () => {
    let chooseUser = val.getAttribute("data-status");
    document.querySelector(".current").classList.remove("current");
    val.classList.add("current");
    console.log((imgBgEl.src = `${imgEl[chooseUser]}`));
    clearInterval(counter);

    if (count === chooseUser) {
      document.querySelector(".current")?.classList.remove("current");
      val.classList.add("current");
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-200px",
  }
);
obs.observe(sectionHeroEl);
