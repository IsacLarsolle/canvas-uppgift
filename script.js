
// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);


function drawPicture() {

  //rektangel till vänster
  let a2 = canvas.width*0.2
  let b2 = canvas.width*0.3
  c.beginPath()
  c.moveTo(a2, 500)
  c.lineTo(b2, 500)
  c.moveTo(b2, 500)
  c.lineTo(b2, 610)
  c.moveTo(a2, 500)
  c.lineTo(a2, 610)
  c.stroke()

  //rektangel till höger
  let a1 = canvas.width*0.7
  let b1 = canvas.width*0.8
  c.beginPath()
  c.moveTo(a1, 500)
  c.lineTo(b1, 500)
  c.moveTo(b1, 500)
  c.lineTo(b1, 610)
  c.moveTo(a1, 500)
  c.lineTo(a1, 610)
  c.stroke()

  //triangel till vänster
  c.beginPath()
  c.moveTo(a2, 500)
  c.lineTo(canvas.width * 0.25, 400)
  c.moveTo(b2, 500)
  c.lineTo(canvas.width * 0.25, 400)
  c.stroke()

  //trinagel till höger
  c.beginPath()
  c.moveTo(a1, 500)
  c.lineTo(canvas.width*0.75, 400)
  c.moveTo(b1, 500)
  c.lineTo(canvas.width*0.75, 400)
  c.stroke()

  //elipse
  c.beginPath()
  c.fillStyle = "green"
  c.ellipse(midX, 440, 50, 150, Math.PI, 175, 2*Math.PI + 4.1)
  c.stroke()
  c.fill()

  //
  c.fillStyle = 'brown'
  c.fillRect(midX - 25, 560, 50, 100)




  
  


}
drawPicture();




