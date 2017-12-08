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

        if (event.pageY<80) {

          $('.head').addClass("slide");

        } else {

          $('.head').removeClass("slide");
        }

      })
    });
