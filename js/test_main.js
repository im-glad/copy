
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 12,
  slidesPerGroup:3,

  breakpoints:{
    1000:{slidesPerView:4,},
    737:{slidesPerView:3,},
    0:{slidesPerView:2,},
  },

  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay:2500,
    disableOnInteraction: false,
  }
          
});