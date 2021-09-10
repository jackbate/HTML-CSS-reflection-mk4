// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunction()};

// Get the header
var header = document.getElementById("header-container");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 