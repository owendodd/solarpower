// $('header').mouseenter(function(){
//   $('.head').addClass("slide");
//
//   return false
// })
//
// $('header').mouseleave(function(){
//   $('.head').removeClass("slide");
//
//   return false
// })

$(document).ready(function() {



  $(document).mousemove(function(event) {

    if (event.clientY < 120) {
      
      $('header').addClass("slideDown");

    } else {

      $('header').removeClass("slideDown");
    }

  })


  $(document).scroll(function(event) {

    if(window.pageYOffset>30) {

      $('header').addClass("slideUp");
      $('.logo img').addClass("slideImg");

    } else {

      $('header').removeClass("slideUp");
      $('.logo img').removeClass("slideImg");
    }

  })



});
