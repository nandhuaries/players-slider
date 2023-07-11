document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 1000,
    },
    // Optional parameters
    effect: "coverflow",
    // centeredSlides: true,
    direction: "vertical",
    loop: true,
    allowTouchMove: true,
    sliderPerView: 2,
    speed: 600,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});

// alert("dsd")

