// Here's where the magic happens
START = true;

let trail = Array(); // all pixels of snake || Currently size 5 in spawn()
const box = 16;

// direction of snake
let vx = 0;
let vy = 0;

// head pixel of snake
let snake_x;
let snake_y;

// pixel of fruit
let fruit_x;
let fruit_y;

const battlefield = document.getElementById('battlefield');
const start = document.getElementById('start');

const ctx = battlefield.getContext('2d');
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, battlefield.width, battlefield.height);
document.addEventListener('keydown', keyDown);

start.onclick = function () {
  if (START) {
    start.innerText = 'RESET';
    START = false;
  }
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, battlefield.width, battlefield.height);
  trail = Array();
  spawn();
  fruit();
};

function fruit() {
  fruit_x = Math.floor(Math.random() * (battlefield.height - box));
  fruit_y = Math.floor(Math.random() * (battlefield.width - box));
  ctx.fillStyle = '#ff0000';
  ctx.fillRect(fruit_x, fruit_y, box, box);
}

function spawn() {
  snake_x = Math.floor(Math.random() * (battlefield.height - 6));
  snake_y = Math.floor(Math.random() * (battlefield.width - 6));
  trail = trail.concat([1, 2, 3, 4, 5]); //colour entire trail
  ctx.fillStyle = '#00ff00';
  ctx.fillRect(snake_x, snake_y, trail.length * box, box);
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
      vx = -1;
      vy = 0;
      console.log(vx, vy);
      break;
    case up:
      // add direction velocity
      vx = 0;
      vy = -1;
      console.log(vx, vy);
      break;
    case down:
      // add direction velocity
      vx = 0;
      vy = 1;
      console.log(vx, vy);
      break;
    case right:
      // add direction velocity
      vx = 1;
      vy = 0;
      console.log(vx, vy);
      break;
  }
}
