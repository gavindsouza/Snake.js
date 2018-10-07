// Here's where the magic happens

function init() {
  let battlefield = document.getElementById('battlefield');
  let ctx = battlefield.getContext('2d');

  document.addEventListener('keydown', keyDown);

  /*
  *ctx.fillStyle = '#000000';
  *ctx.fillRect(0, 0, battlefield.height, battlefield.width); // doesnt work ?
  */
}

function game() {
  // snake curr positions
  // apple curr positions
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