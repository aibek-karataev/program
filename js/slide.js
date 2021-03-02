  var swiper = new Swiper('.swiper1', {
    slidesPerView: 'auto',
    loop:true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    onlyExternal:false,
  });
  var swiper2 = new Swiper(".swiper3",{
    slidesPerView: 3,
    spaceBetween:50,
    freeMode:false,
    loop:true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.navig .swiper-button-next',
      prevEl: '.navig .swiper-button-prev',
    },
    breakpoints: {
      1000: {
        slidesPerView: 3,
        spaceBetween: 40,
        autoplay: {
          delay: 4000,
        },
      },
      760: {
        slidesPerView: 2,
        spaceBetween: 40,
        autoplay: {
          delay: 4000,
        },
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
        autoplay: {
          delay: 4000,
        },
      },
    }
  })

