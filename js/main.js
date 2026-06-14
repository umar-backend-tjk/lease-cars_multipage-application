const tabButtons = document.querySelectorAll(".tabs__btn-item");
const tabContents = document.querySelectorAll(".tabs__content-item");

tabButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    const tabTarget = event.currentTarget;
    const tabContent = tabTarget.dataset.button;

    tabButtons.forEach((el) => {
      el.classList.remove("tabs__btn-item--active");
    });

    tabTarget.classList.add("tabs__btn-item--active");

    tabContents.forEach((el) => {
      if (el.id != tabContent) {
        el.classList.remove("tabs__content-item--active");
      } else {
        el.classList.add("tabs__content-item--active");
      }
    });
  });
});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
})



const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
