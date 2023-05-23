var lastScrollTop = 0;
var navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", function(){
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop){
       navbar.style.top = "-.5vh"; // scroll down, hide navbar
   } else {
       navbar.style.top = "2vh"; // scroll up, show navbar
   }
   lastScrollTop = scrollTop;
})