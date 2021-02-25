$( document ).ready(function() {
  $(".catalog-btn").click(function(){
      $(".catalog-block").toggleClass("height");
      $(".catalog-btn").toggleClass("he");
    });
    // Modal window support
    $(".modalInfo").click(function(){
      $("#inModal").fadeIn();
    })
    $(".closeModal").click(function(){
      $("#inModal").fadeOut();
    })
    $(document).mouseup(function(e){
      let popup = $(".modal-content-sup");
      if(e.target != popup[0] && popup.has(e.target).length === 0){
        $("#inModal").fadeOut();
      }
    })
    // Modal window products
    $(".modProd").click(function(){
      $(".modal-products").fadeIn();
    })
    $(".closeProduct").click(function(){
      $(".modal-products").fadeOut();
    })
    $(document).mouseup(function(e){
      let popup = $(".modal-content");
      if(e.target != popup[0] && popup.has(e.target).length === 0){
        $(".modal-products").fadeOut();
      }
    })
    // side-menu mobile
    $(".gamburger").click(function(){
      $(".nav_menu").css({"width": "50%"});
      $(".nav_menu li").css({"left": "0px"});
      $(".selectMob").css({"left": "0px"});

    })
    $(".closeBtn").click(function(){
      $(".nav_menu").css({"width": "-10%"});
      $(".nav_menu li").css({"left": "-99999px"});
      $(".selectMob").css({"left": "-99999px"});
    })

});

// product

function productImg(smallImg){
  let fullImg = document.getElementById("imgBox");
  fullImg.src = smallImg.src;
}

