  // Modal window
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("modalBtn");
  let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$( document ).ready(function() {
    $(".catalog-btn").click(function(){
        $(".catalog-block").toggleClass("height");
        $(".catalog-btn").toggleClass("he");
      });
  });
  var swiper = new Swiper('.swiper1', {
    slidesPerView: 'auto',
    loop:true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    onlyExternal:false
  });
  var swiper1 = new Swiper(".swiper2",{
    direction: 'vertical',
    slidesPerView: 2,
    spaceBetween:5,
    freeMode:false,
    autoplay: {
      delay: 5000,
    },
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
  })

