new Swiper('.image-slider', {
     //СТРЕЛКИ
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
     },
     //НАВИГАЦИЯ
     pagination: {
          el: '.swiper-pagination',
          //БУЛЛЕТЫ
          clickable: true,
          //ДИНАМИЧЕСКИЕ БУЛЛЕТЫ
          dynamicBullets: true,
     },
});
