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
});

