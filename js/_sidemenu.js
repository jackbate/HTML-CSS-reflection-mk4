// This function  allows the program to recognise the class 'menu-display' and change the value accordingly
function toggleSlideMenu(x){
    if(x.classList.contains('menu-display')){
        document.getElementById("mySidebar").style.width = "350px";
        document.body.style.right = "350px";
        document.body.style.position = "relative";
    }
    else{
        document.getElementById("mySidebar").style.width = "0";
        document.body.style.right = "0";
        document.body.style.position = " ";
    }
   }

//    This function  allows the program to recognise the class 'menu-display' and change the value accordingly
// function toggleSlideMenu(x){
//         if(x.classList.contains('menu-display')){
//             function mediaFunction(mediaQuery){
//                 if (mediaQuery.matches){
//                     document.getElementById("mySidebar").style.width = "350px";
//                     document.body.style.right = "350px";
//                     document.body.style.position = "relative";
//                 }else{
//                     document.getElementById("mySidebar").style.width = "275px";
//                     document.body.style.right = "275px";
//                     document.body.style.position = "relative";
//                 }    
//             }       
//         }else{
//             document.getElementById("mySidebar").style.width = "0";
//             document.body.style.right = "0";
//             document.body.style.position = " ";
//             }
//     }