// Here's where the magic happens

trail = []; // all pixels of snake

let vx = 0;
let vy = 0;


battlefield = document.getElementById('battlefield');
start = document.getElementById('start');

start.onclick = function () {
  console.log(Math.floor(Math.random() * (battlefield.height - 6)));
};

ctx = battlefield.getContext('2d');
ctx.fillRect(0, 0, battlefield.width, battlefield.height); // doesnt work ?

ctx.fillStyle = '#000000';

document.addEventListener('keydown', keyDown);


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

/*
function init() {
  var battlefield = document.getElementById('battlefield');
  //ctx = battlefield.getContext('2d');

  battlefield.fillRect(0, 0, battlefield.height, battlefield.width); // doesnt work ?
  battlefield.fillStyle = '#000000';

    let width = 350;
    let height = 350;

    let snakeSize = 10;
    let score = 0;


    let snake;
    let food;

    document.addEventListener('keydown', keyDown);
}
*/

/*
function game() {
  // snake curr positions
  // apple curr positions ref: <script>document.write(Math.floor(Math.random()*100))</script>
}
*/