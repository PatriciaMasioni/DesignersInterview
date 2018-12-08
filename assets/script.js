
var canvas = document.querySelector('canvas');
// Resize the canvas. Make it have a full height/width ao the window(your screen)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

// To change our fill style property
context.fillStyle = 'rgba(234,112,11,0.9)';
// context.fillRect(x, y, width, height);
context.fillRect(500, 9, 100, 100);
context.fillStyle = 'rgba(0,12,101,0.9)';
context.fillRect(30, 39, 100, 100);

// for (int x = 0; x < 10; x++) {
//   // graph2D.drawRect(int x, int y, int width, height)
//   graph2D.drawRect(170, (x * 45) + 180, 10, 50);
// }

// line
// Tell canavas that we want to start a path
context.beginPath();
//  Where we want it to start. Our point gonna
// be invisible firts, cause there's no stroke yet
// context.moveTo(x, y);
context.moveTo(50, 300);
//  Where we want our line to go to
// context.lineTo(x, y);
 context.lineTo(300, 100);
 // You can spend our line to another point
 // to draw a specific shape (as brutalist.website)
 context.lineTo(400, 100);
// Now we can add a color to our line
 context.strokeStyle = "#fa87a7";
 // To make our line visible
 context.stroke();

 context.beginPath();
 context.moveTo(400, 400);
 context.lineTo(310, 410);
 context.lineTo(520, 500);
 context.lineTo(679, 435);
 context.lineTo(747, 310);
 context.lineTo(476, 70);
 context.lineTo(89, 58);
 context.lineTo(400, 400);
 context.strokeStyle = "blue";
 context.stroke();

// Run a loop to draw something multiple times
// for ( how much times you wanna run you loop){
// what you wanna draw;
// }

for (i = 0; i<14; i++){
  // To change the position of each rectangle(shape)
  // var x = ; one for the x (horizontal)
  // var y = ; one for the y (vertical)
  // Math.random() => set a random number between 0 to 1
  //  We turn a (give us a) random value anywhere to the width
  // of the screen, by multiplying "Math.random" to the value on the width of the screen
  // It's gonna give us a value each time we refresh our window
  var x = Math.random() * window.innerWidth;
   // var y = Math.random() * window.innerHeight;
   // var y = Math.random();

  // context.fillRect(x, y, width, height);
  context.fillRect(x, 156, 10, 100);
}
console.log(canvas);
