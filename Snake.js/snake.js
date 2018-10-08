// Here's where the magic happens

function init() {
  let battlefield = document.getElementById('battlefield');
  let ctx = battlefield.getContext('2d');

  let width = 350;
  let height = 350;
  let snakeSize = 10;
  let score = 0;

  let snake;
  let food;


  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, battlefield.height, battlefield.width); // doesnt work ?

  document.addEventListener('keydown', keyDown);

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
      // add direction velocity
      break;
    case up:
      // add direction velocity
      break;
    case down:
      // add direction velocity
      break;
    case right:
      // add direction velocity
      break;
  }
}


function game() {
  // snake curr positions
  // apple curr positions ref: <script>document.write(Math.floor(Math.random()*100))</script>
}
