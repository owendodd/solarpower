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

    if(window.pageYOffset>200) {

      $('header').addClass("slideUp");

    } else {

      $('header').removeClass("slideUp");
    }

  })



});
