// $(document).ready(function(){
//     $('.carousel').slick({
//       setting-name: setting-value
//     });
//   });

function menuFunction(x) {
    x.classList.toggle("change");
    x.classList.toggle("menu-display");
} 

function closeFunction(y){
    document.getElementById('main').remove('menu-display');
    document.getElementById('main').removeClass('change');
}

// document.getElementById('tint').onclick = function(){
//     document.getElementById("main").classList.remove("menu-display");
//     document.getElementById("main").classList.remove("change");
// }

// function bodyFunction(x){
//     x.classList.remove("menu-display");
//     x.classList.remove("change");
// }


// function myFunction(mediaQueryscreen) {
//     if (mediaQueryscreen.matches) { // If media query matches
//       document.getElementsByClassName('form-wrapperout').classList.add('content-sizing');
//     } else {
//       document.getElementsByClassName('form-wrapperout').classList.remove('content-sizing');
//     }
//   }

//   var mediaQueryscreen = window.matchMedia("(min-width: 1240px)");
  