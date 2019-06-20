var count = 0;
var topScore = 0;
// var score = document.getElementById("count");
// Enemies our player must avoid
var Enemy = function(x, y, move) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.move = move;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x = this.x + this.move * dt;
  if (this.x > 500) {
    this.move = 100 + Math.floor(Math.random() * 520);
    this.x = 0;
  }
  if (this.x == 0) {
    this.move = 100 + Math.floor(Math.random() * 30);
  }

  if (this.x == 0) {
    this.move = 100 + Math.floor(Math.random() * 100);
  }
  // player moves by char-boy and count are adding into count
  if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 && player.y + 60 > this.y) {
    if (topScore < count) {
      topScore = count;
      ctx.fillText("highScore : " + topScore, 400, 20);
    }
    count = 0;
    topScore = count;
    player.x = 200;
    player.y = 400;
    player.move = 'images/char-boy.png';
    Swal.fire('You lose the game')
  }

  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  drawScore();
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-horn-girl.png';
  }
}
Player.prototype.update = function(dt) {}
// resources for images palced for image in canvas
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemyPostion = [60, 139, 223];
enemyPostion.map((item) => {
  var enemyItem = new Enemy(0, item, 180);
  console.log(enemyItem);
  allEnemies.push(enemyItem);
})
// player goes does down, up, sides properties are written their
// players are consequently done in canvas
var player = new Player(200, 400);
Player.prototype.handleInput = function(key) {
  switch (key) {
    case 'left':
      this.x = this.x - 101;
      if (this.x < 0) {
        this.x = 0;
      }
      break;
    case 'right':
      this.x = this.x + 101;
      if (this.x > 400) {
        this.x = 404;
      }
      break;
    case 'down':
      this.y = this.y + 83;
      if (this.y > 400) {
        this.y = 400;
      }
      break;
    case 'up':
      this.y = this.y - 83;
      if (this.y < 0) {
        this.y = -14;
        setTimeout(() => {
          count = count + 1;
          this.x = 200;
          this.y = 400;
        }, 50);
      }
      break;
    default:
  }

}

// score and highScore display on the screen using ctx "canvas"
function drawScore() {
  ctx.font = "16px bold";
  ctx.fillText("Score : " + count, 8, 20);
  // ctx.fillText("highScore : " + topScore, 400, 20);
}

if (topScore < count) {
  count = topScore;
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
