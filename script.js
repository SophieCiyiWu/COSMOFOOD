var listImage = ["./megane.jpg", "./sophie.jpg", "./megane2.jpg", "./sophie2.jpg"];
var index = 0;

setInterval(function() {

   if (index === listImage.length - 1){
       index = 0;
   } else {
       index++
   }
  
   document.querySelector(".img-team").src = listImage[index];
}, 2000);

