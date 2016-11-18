var BatX = 525;
var BatY = 300;
document.addEventListener("keydown", function(e) {
 if(e.keyCode == 37){
   BatX -=15;
document.getElementById("bat").setAttribute("x", BatX)

 }
 else if(e.keyCode == 39){
       BatX +=15;
document.getElementById("bat").setAttribute("x", BatX)
 }

 if(e.keyCode == 37){
   BatX -=15;
document.getElementById("batFly").setAttribute("x", BatX)

 }
 else if(e.keyCode == 39){
       BatX +=15;
document.getElementById("batFly").setAttribute("x", BatX)
 }
 else if(e.keyCode == 38){
       BatY -=15;
document.getElementById("batFly").setAttribute("y", BatY)
 }
 else if(e.keyCode == 40){
       BatY +=15;
document.getElementById("batFly").setAttribute("y", BatY)
 }
})
