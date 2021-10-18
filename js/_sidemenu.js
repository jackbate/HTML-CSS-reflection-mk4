// This is the function to find the screen size and set the width for the side menu accordingly
var menuSize

function myFunction(mediaQuery) {
        if (mediaQuery.matches) { // If media query matches
          menuSize = "275px"
        } else {
          menuSize = "350px"
        }
        console.log(menuSize)
      }
      
var mediaQuery = window.matchMedia("(max-width: 992px)");
myFunction(mediaQuery); // Call listener function at run time
mediaQuery.addListener(myFunction); // Attach listener function on state changes 

// This function  allows the program to recognise the class 'menu-display' and change the value accordingly
function toggleSlideMenu(x){
    if(x.classList.contains('menu-display')){
        document.getElementById("mySidebar").style.width = menuSize;
        document.body.style.right = menuSize;
        document.body.style.position = "relative";
        document.body.style.overflowY = "hidden";
        document.getElementById('mySidebar').style.boxShadow = "0 0 0 10000px rgba(0,0,0,.50)";
        document.getElementById('fulltint').style.pointerEvents = "none"
    }
    else{
        document.getElementById("mySidebar").style.width = "0";
        document.body.style.right = "0";
        document.body.style.position = " ";
        document.body.style.overflowY = "visible"
        document.getElementById('mySidebar').style.boxShadow = "0 0 0 0 rgba(0,0,0,.50)";
    }
   }


   

// all attempts below are for implementing media querys via js to the code none were successful

//    This function  allows the program to recognise the class 'menu-display' and change the value accordingly
// function toggleSlideMenu(x){
//         if(x.classList.contains('menu-display')){
//             function mediaFunction(mediaQuery){
//                 if (mediaQuery.matches){
//                     document.getElementById("mySidebar").style.width = "275px";
//                     document.body.style.right = "275px";
//                     document.body.style.position = "relative";
//                 }else{
//                     document.getElementById("mySidebar").style.width = "350px";
//                     document.body.style.right = "350px";
//                     document.body.style.position = "relative";
//                 }    
//             }       
//         }else{
//             document.getElementById("mySidebar").style.width = "0";
//             document.body.style.right = "0";
//             document.body.style.position = " ";
//             }
//     }

    // function myFunction(mediaQuery) {
    //     if (mediaQuery.matches) { // If media query matches
    //       document.body.style.backgroundColor = "yellow";
    //     } else {
    //       document.body.style.backgroundColor = "pink";
    //     }
    //   }
      
    //   var mediaQuery = window.matchMedia("(max-width: 700px)");
    //   myFunction(mediaQuery); // Call listener function at run time
    //   mediaQuery.addListener(myFunction); // Attach listener function on state changes 
    
    // ------------------------------------ below attempts were the closest to success but were to no avail.
// var mediaQueryList = window.matchMedia('(max-width: 998px)');

// function toggleSlideMenu(x){
//         if(x.classList.contains('menu-display')){
//             function screenTest(e) {
//                 if (e.matches) {
//                     document.getElementById("mySidebar").style.width = "275px";
//                     document.body.style.right = "275px";
//                     document.body.style.position = "relative";
//                 } else {
//                     document.getElementById("mySidebar").style.width = "350px";
//                     document.body.style.right = "350px";
//                     document.body.style.position = "relative";
//                 }
//             }
//         }else{
//             document.getElementById("mySidebar").style.width = "0";
//             document.body.style.right = "0";
//             document.body.style.position = " ";
//         }
//     }


//     function screenTest(e) {
//         if (e.matches) {
//             function toggleSlideMenu(x){
//                 if(x.classList.contains('menu-display')){
//                     document.getElementById("mySidebar").style.width = "275px";
//                     document.body.style.right = "275px";
//                     document.body.style.position = "relative";
//                 }else{
//                     document.getElementById("mySidebar").style.width = "0";
//                     document.body.style.right = "0";
//                     document.body.style.position = " ";
//                 }
//             }
//         } else {
//             function toggleSlideMenu(x){
//                 if(x.classList.contains('menu-display')){
//                     document.getElementById("mySidebar").style.width = "275px";
//                     document.body.style.right = "275px";
//                     document.body.style.position = "relative";
//                 }else{
//                     document.getElementById("mySidebar").style.width = "0";
//                     document.body.style.right = "0";
//                     document.body.style.position = " ";
//                 }
//             }
//         }
//     }
// }

// mediaQueryList.addListener(screenTest);

