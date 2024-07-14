document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".header__menu__list", {
    duration: 1.6,
    delay: 0.5,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  });
  gsap.to(".header__button", {
    duration: 1.6,
    delay: 0.7,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  });
  gsap.to(".header__logo", {
    duration: 1.6,
    delay: 0.2,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  });
});
