var canvas1 = document.getElementById("overlap-canvas-one")
var BatX = 525;
var BatY = 300;
var food1 = 1;
var food2  = 1;
var foodEaten = 0;
var width = 35;
var height = 35;

document.addEventListener("keydown", function(e) {
 if(e.keyCode == 37){
   BatX -=15;
document.getElementById("bat").setAttribute("x", BatX)

 }
 else if (e.keyCode == 39) {
       BatX +=15;
document.getElementById("bat").setAttribute("x", BatX)
 }
 var bat1 = document.getElementById("bat");
 var food1 = document.getElementById("food1");

 BatX = Number(bat1.getAttribute("x"))
 BatY = Number(bat1.getAttribute("y"))

 foodX = Number(food1.getAttribute("x"))
 foodY = Number(food1.getAttribute("y"))


 if(BatX > foodX && BatX < foodX + width && BatY > foodY && BatY < foodY + height) {
   console.log("overlap")
   foodEaten = foodEaten + 1;
   document.getElementById("score").textContent = foodEaten;
 }

/*
 foodX = Number(food1.getAttribute("x"))
 foodY = Number(food1.getAttribute("y"))

 if (BatX > foodX && BatX < foodX + width && BatY > foodY && BatY < foodY + height) {
   var xValue = randomNumber();
   var yValue = randomNumber();
   foodEaten = foodEaten + 1;
   document.getElementById("score").textContent = foodEaten;
 }*/




 if(foodEaten == 5) {

    document.getElementById("screen").pauseAnimation;
    var timeStop = Date.now()
    var timeDuration = timeStop - timeStart
    timeDuration = timeDuration/1000
    document.getElementById("totaltime").textContent
 }


})
