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

$(document).ready(function(){



$(document).mousemove(function(event) {

        if (event.pageY<150) {

          $('header').addClass("slide");

        } else {

          $('header').removeClass("slide");
        }

      })
    });
