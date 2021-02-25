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
  var swiper1 = new Swiper(".swiper2",{
    slidesPerView: 2,
    spaceBetween:5,
    freeMode:false,
    autoplay: {
      delay: 5000,
    },
    breakpoints:{
      991:{
        direction: 'vertical'
      },
      414:{
        direction: 'horizontal'
      }
    }
  })
  var swiper2 = new Swiper(".swiper3",{
    slidesPerView: 3,
    spaceBetween:50,
    freeMode:false,
    loop:true,
    navigation: {
      nextEl: '.navig .swiper-button-next',
      prevEl: '.navig .swiper-button-prev',
    },
    breakpoints: {
      1000: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      760: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
    }
  })
  var swiper3 = new Swiper(".swiper4",{
    slidesPerView: 3,
    spaceBetween:50,
    freeMode:false,
    loop:true,
    navigation: {
      nextEl: '.navig-client .swiper-button-next',
      prevEl: '.navig-client .swiper-button-prev',
    },
    breakpoints: {
      760: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 40
      },

    }
  })
