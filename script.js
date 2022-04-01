// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const ctx = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;
const width = canvas.width
const height = canvas.height

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);


// Constants
const treeTrunkWidth = width*0.05
const treeTrunkHeight = height*0.3
const treeCanopyWidth = width*0.1
const treeCanopyHeight = height*0.6
const canopyCutoff = Math.PI/4
const houseWidth = width*0.3
const houseHeight = height*0.3

function drawPicture() {
  // Här skriver du funktionen som ritar bilden
  
  // Träd stammen
  ctx.fillStyle = "#9c5600";
  ctx.rect(midX-treeTrunkWidth/2, height-treeTrunkHeight, treeTrunkWidth, treeTrunkHeight)
  ctx.fill()
  ctx.stroke()

  // Träd löven
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.ellipse(midX, height-treeTrunkHeight*0.7-treeCanopyHeight/2, treeCanopyWidth/2, treeCanopyHeight/2, 0, canopyCutoff, Math.PI-canopyCutoff, true)
  ctx.fill();
  ctx.stroke();

  // Hus
  ctx.rect(width-width*0.01-houseWidth, height-height*0.01-houseHeight, houseWidth, houseHeight)
  ctx.stroke()

  ctx.rect(width*0.01, height-height*0.01-houseHeight, houseWidth, houseHeight)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(width*0.01, height-height*0.01-houseHeight)
  ctx.lineTo(width*0.01+houseWidth/2, height-height*0.01-houseHeight-houseHeight)
  ctx.lineTo(width*0.01+houseWidth, height-height*0.01-houseHeight)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(width-width*0.01-houseWidth, height-height*0.01-houseHeight)
  ctx.lineTo(width-width*0.01-houseWidth/2, height-height*0.01-houseHeight-houseHeight)
  ctx.lineTo(width-width*0.01, height-height*0.01-houseHeight)
  ctx.stroke()
}
drawPicture();
