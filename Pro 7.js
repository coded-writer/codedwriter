$(function(){
var slideShow = ["https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXJmYWxsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmllbGR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", " https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d29vZHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"];
var iRight = $("#icon-right");
var iLeft = $("#icon-left");
var currentImage = 0;

iRight.on("click", function(){
   currentImage++;
  if(currentImage >= slideShow.length){
      currentImage = 0;
    }
$("#img").attr("src", slideShow[currentImage]);
});

});