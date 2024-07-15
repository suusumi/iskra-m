document.addEventListener("DOMContentLoaded", function () {
  // Регистрация плагина
  gsap.registerPlugin(TextPlugin);

  // Анимация элементов шапки
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

  // Переключение гамбургер-меню
  const menuToggle = document.getElementById("menu__toggle");
  const menuBtnSpan = document.querySelector(".menu__btn span");
  const menuBtnSpanBefore = document.querySelector(".menu__btn span::before");
  const menuBtnSpanAfter = document.querySelector(".menu__btn span::after");

  menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
      gsap.to(menuBtnSpan, { rotation: 90, y: 0, duration: 0.1 });
      gsap.to(menuBtnSpanBefore, { rotation: 90, top: 0, duration: 0.2 });
      gsap.to(menuBtnSpanAfter, { rotation: 90, top: 0, duration: 0.2 });
    } else {
      gsap.to(menuBtnSpan, { rotation: 0, y: 0, duration: 0.1 });
      gsap.to(menuBtnSpanBefore, { rotation: 0, top: -8, duration: 0.3 });
      gsap.to(menuBtnSpanAfter, { rotation: 0, top: 8, duration: 0.3 });
    }
  });

  // Анимация подергивания стрелки
  gsap.to(".header__button_arrow", {
    x: 3,
    rotation: 45,
    duration: 0.5,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    repeatDelay: 1.5,
    delay: 2,
  });

  // Анимация при наведении на кнопку
  const headerButton = document.querySelector(".header__button");
  headerButton.addEventListener("mouseenter", () => {
    gsap.to(".header__button_arrow", { x: 10, duration: 0.3 });
  });
  headerButton.addEventListener("mouseleave", () => {
    gsap.to(".header__button_arrow", { x: 3, duration: 0.3 });
  });

  // Анимация набора текста
  const typingText = document.getElementById("typing-text");
  const text = typingText.textContent;
  typingText.textContent = "";

  gsap.to(typingText, {
    duration: 2.2,
    text: text,
    ease: "power3.inOut",
    delay: 0.2,
  });

  // Анимация появления лого первый блок
  gsap.to(".box__img", {
    duration: 1.6,
    delay: 0.5,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  });

  //   Анимация появления subtext первый блок
  gsap.to(".box__subtext", {
    duration: 1.6,
    delay: 0.5,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  });
});
