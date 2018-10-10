// Here's where the magic happens

trail = []; // all pixels of snake

let vx = 0;
let vy = 0;


const battlefield = document.getElementById('battlefield');
const start = document.getElementById('start');

start.onclick = function () {
  fruit();
};

const ctx = battlefield.getContext('2d');
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, battlefield.width, battlefield.height);
fruit();
document.addEventListener('keydown', keyDown);

function fruit() {
  x = Math.floor(Math.random() * (battlefield.height));
  y = Math.floor(Math.random() * (battlefield.width));
  ctx.fillStyle = '#ff0000';
  ctx.fillRect(x, y, 10, 5);
}

function spawn() {
  s_x = Math.floor(Math.random() * (battlefield.height - 6));
  s_y = Math.floor(Math.random() * (battlefield.width - 6));
  // draw snake
}

function keyDown(event) {
  // ascii codes of buttons
  let left = 37;
  let up = 38;
  let right = 39;
  let down = 40;

  // okay so using switch here was more convenient
  switch (event.keyCode) {
    case left:
      //alert("left");
      vx =
        console.log(vx, vy);
      break;
    case up:
      // add direction velocity
      console.log(vx, vy);
      break;
    case down:
      // add direction velocity
      console.log(vx, vy);
      break;
    case right:
      console.log(vx, vy);
      // add direction velocity
      break;
  }
}
