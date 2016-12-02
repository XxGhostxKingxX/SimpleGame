var canvas1 = document.getElementById("overlap-canvas-one")
var BatX = 525;
var BatY = 300;
var food1 =
var food2 =
var foodEaten = 0;

document.addEventListener("keydown", function(e) {
 if(e.keyCode == 37){
   BatX -=15;
document.getElementById("bat").setAttribute("x", BatX)

 }
 else (e.keyCode == 39){
       BatX +=15;
document.getElementById("bat").setAttribute("x", BatX)
 }
}
 var Bat1 = document.getElementById("Bat1")
 var food1 = document.getElementById("food1")

 BatX = Number(bat1.getAttribute("x"))
 BatY = Number(bat1.getAttribute("y"))

 foodX = Number(food1.getAttribute("x"))
 foodY = Number(food1.getAttribute("y"))

}
if(BatX > foodX && BatX < foodX + width && BatY > foodY && BatY < foodY + height) {
  foodEaten = foodEaten + 1;
  document.getElementById("score").textContent = foodEaten;
}

foodX = Number(food1.getAttribute("x"))
foodY = Number(food1.getAttribute("y"))

if (BatX > foodX && BatX < foodX + width && BatY > foodY && BatY < foodY + height) {
  var xValue = randomNumber();
  var yValue = randomNumber();
  foodEaten = foodEaten + 1;
  document.getElementById("score").textContent = foodEaten;
}

else {
  foodEaten.setAttribute("opacity", 1)
}

})
