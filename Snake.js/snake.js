// Here's where the magic happens

function init() {
  var battlefield = document.getElementById('battlefield');
  var ctx = battlefield.getContext('2d');

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, battlefield.height, battlefield.width); // doesnt work ?

}