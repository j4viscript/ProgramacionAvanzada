// Pintar un cuadrado con canvas
var cv = document.getElementById('mycanvas');
var ctx = cv.getContext('2d');

// ctx.fillStyle = "rgba(0, 200, 0, 0.5)";
// ctx.fillRect(10,10, 55,50);

// ctx.fillStyle = "rgba(200, 0, 0)";
// ctx.fillRect (65,60, 55,50);

// ctx.fillStyle = "rgb(0, 0, 200)";
// ctx.fillRect (120,110, 55,50);

// Lineas

// ctx.moveTo(250,500);
// ctx.lineTo(250, 225);
// ctx.stroke();

// ctx.moveTo(250,250);
// ctx.lineTo(100, 225);
// ctx.lineTo(250, 225);
// ctx.fill();


//Circulo
// ctx.beginPath();
// ctx.arc(100, 250, 50, 0, 2*Math.PI);
// ctx.strokeStyle = "Green";
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(350, 250, 100, 0, 2*Math.PI);
// ctx.fillStyle = "orange";
// ctx.fill();

// Textos

ctx.font = "30px Arial";
ctx.fillText("Hola mundo", 150, 200);
ctx.strokeText("Hola mundo", 150, 240);
