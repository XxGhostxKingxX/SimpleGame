var canvas1 = document.getElementById("overlap-canvas-one")
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

 var Bat1 = document.getElementById("Bat1")
 var food1 = document.getElementById("food1")

 BatX = Number(bat1.getAttribute("x"))
 BatY = Number(bat1.getAttribute("y"))

 foodX = Number(food1.getAttribute("x"))
 foodY = Number(food1.getAttribute("y"))

 if (BatX > foodX && batX < foodX + width) {
   bat1.setAttribute("opacity", "0")
   food1.setAttribute("opacity", "0")
 }
 else {
   food1.setAttribute("opacity", "0")
 }

})

if(BatX > foodX && BatX < foodX + width && BatY > foodY && BatY < foodY + height) {
  //code to "eat" food Part 5
}
