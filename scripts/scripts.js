document.addEventListener("DOMContentLoaded", function () {
  // Регистрация плагина
  gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollToPlugin);

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
  // Анимация появления текста при скролле
  gsap.to(".text__block__subtext", {
    scrollTrigger: {
      trigger: ".text__block",
      start: "top 80%", // начало анимации при достижении 80% от верха экрана
    },
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  });

  // Хаотичное движение квадратиков
  const squares = document.querySelectorAll(".text__block__square");

  squares.forEach((square) => {
    gsap.to(square, {
      x: "random(0, 560)", // 660px (ширина контейнера) - 100px (ширина квадрата)
      y: "random(0, 257)", // 357px (высота контейнера) - 100px (высота квадрата)
      duration: "random(2, 3)",
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  });

  // Остановка движения при наведении на голубой блок
  //   const dynamicBlock = document.querySelector(".text__block__dynamic_block");

  //   dynamicBlock.addEventListener("mouseenter", () => {
  //     gsap.globalTimeline.pause();
  //   });

  //   dynamicBlock.addEventListener("mouseleave", () => {
  //     gsap.globalTimeline.resume();
  //   });

  gsap.to(".text__block__subtext", {
    scrollTrigger: {
      trigger: ".text__block",
      start: "top 90%", // начало анимации при достижении 80% от верха экрана
    },
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power3.out",
  });

  // Анимация появления строк в правом столбце второго блока
  const items = document.querySelectorAll(".second__block__item");
  const details = document.querySelectorAll(".second__block__detail");

  items.forEach((item, index) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%", // начало анимации при достижении 75% от верха экрана
        toggleActions: "play none none none",
      },
      color: "#000",
      duration: 1,
      ease: "power3.out",
      delay: index * 0.3, // задержка для последовательного появления
    });
    gsap.to(details[index], {
      scrollTrigger: {
        trigger: item,
        start: "top 80%", // начало анимации при достижении 75% от верха экрана
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: index * 0.3, // задержка для последовательного появления
    });
  });
});
// Плавный скроллинг при клике на пункты меню
document
  .querySelectorAll(".header__menu__item a, .menu__item2")
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: `#${targetId}`, offsetY: 50 },
        ease: "power3.inOut",
      });
    });

    // Анимация subtext project block
    gsap.to(".projects__block__subtext", {
      scrollTrigger: {
        trigger: ".projects__block",
        start: "top 75%", // начало анимации при достижении 80% от верха экрана
      },
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power3.out",
    });
  });
