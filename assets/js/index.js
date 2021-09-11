
  function openNav() {
    document.getElementById("menu_icon").style.visibility="hidden";
    document.getElementById("closeNav").style.visibility="visible";    
  }
  
  function closeNav() {  
    document.getElementById("menu_icon").style.visibility="visible";
    document.getElementById("closeNav").style.visibility="hidden";    
  }


const menu = document.querySelector(".mobile-menu");
const btn=document.querySelector(".mobile-menu-btn");
btn.addEventListener("click",()=>{
  menu.classList.toggle("hidden");
});



var header = document.querySelector(".nav-link");
var btns = header.getElementsByClassName("menu-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
 
  });
}










