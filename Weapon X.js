function loaded(){
  var loader = document.querySelector(".loader-wrapper");
  var webContent = document.querySelector(".content-wrapper");
  var menuBtn = document.querySelector('.menu-icon');
  var navBar = document.querySelector(".nav-bar");
  var ID = document.getElementById.bind(document);
 var links = document.querySelectorAll(".link-item");
 var write;
 
  setTimeout(()=>{
    loader.style.display= "none";
    webContent.style.display="block";
     write = true;
     var t;
 if(write){
  t = setInterval(typing,130);
  write = !write;
 } else {
   clearInterval(t);
 }
  },5000);
     
  const navHandler = ()=>{
    menuBtn.classList.toggle("icon-X");
    navBar.classList.toggle("nav-bar-visible");
    
  };
  
for(a =0; a < links.length; a++){
  links[a].addEventListener('click', navHandler);
}

  menuBtn.addEventListener('click', navHandler);
 
  
  setInterval(function(){
  
    function addZero(zero) {
      return (zero < 10)? "0"+String(zero):String(zero);
    }
   var newYear = new Date("January 01 2021 00:00:00").getTime();
   var currentTime = new Date().getTime();
   var remainingDays = newYear - currentTime;
   var 
   days,hours,minutes,seconds;
   
   days = Math.floor(remainingDays/(86400000));
   hours = Math.floor((remainingDays % 86400000)/3600000);
   minutes = Math.floor((remainingDays % 3600000)/60000);
   seconds = addZero(Math.floor((remainingDays % 60000)/1000));
   
   document.getElementById("countdown").innerHTML = days+"d "+hours+"h "+minutes+"m "+seconds+"s";
   
   
   if(remainingDays < 0){
     document.getElementById("countdown").innerHTML = "Happy New Year!";
   }
  }, 1000);
 

  var type = document.querySelector(".season");
  var cursor = document.querySelector(".cursor");
  var tStyle;
  text = "Wishing Most Rev.Fr. Emmanuel Ezenwata a stupendous birthday celebration and a blissful Merry Christmas";
 
  
var i= 0;
  
  function typing() {
    type.innerHTML += text.charAt(i);
    i++;
    
   if(i == text.length){
     setTimeout(()=>{
      i = 0;
      type.innerHTML = "";
      typing();
 },5000);
   }
 }

}
window.onload=loaded();