const battlefield = document.getElementById('battlefield');
const start = document.getElementById('start');

// Here's where the magic happens
var snake = {};

snake.START = true;
snake.box = 16;

snake.trail = Array(); // all pixels of snake || Currently size 5 in spawn()

// direction of snake / head pixel of snake
snake.current = {x: 0, y: 0};

// pixel of fruit
snake.fruit = {x: 0, y: 0};

const ctx = battlefield.getContext('2d');
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, battlefield.width, battlefield.height);
document.addEventListener('keydown', keyDown);

start.onclick = function () {
  if (snake.START) {
    start.innerText = 'RESET';
    snake.START = false;
  }
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, battlefield.width, battlefield.height);
  snake.trail = Array();
  spawn();
  fruit();
};

function fruit() {
  snake.fruit.x = Math.floor(Math.random() * (battlefield.height - snake.box));
  snake.fruit.y = Math.floor(Math.random() * (battlefield.width - snake.box));

  ctx.fillStyle = '#ff0000';
  ctx.fillRect(snake.fruit.x, snake.fruit.y, snake.box, snake.box);
}

function spawn() {
  snake.current.x = Math.floor(Math.random() * (battlefield.height - 6));
  snake.current.y = Math.floor(Math.random() * (battlefield.width - 6));
  snake.trail = snake.trail.concat([1, 2, 3, 4, 5]); //colour entire trail
  ctx.fillStyle = '#00ff00';
  ctx.fillRect(snake.current.x, snake.current.y, snake.trail.length * snake.box, snake.box);
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
      snake.current = {x: -1, y: 0};
      break;
    case up:
      snake.current = {x: 0, y: -1};
      break;
    case down:
      snake.current = {x: 0, y: 1};
      break;
    case right:
      snake.current = {x: 1, y: 0};
      break;
  }
  console.log(snake.current);
}

function changeDirection(current_direction) {
  let directionOpposite = {
    'left': 'right',
    'right': 'left',
    'up': 'down',
    'down': 'up'
  };
  // if in the same direction, dont change
  // elif in the opposite direction, dont change
  // else change
}
