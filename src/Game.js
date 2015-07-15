function Game() {
  this.rollsTracker = [];
  this.frameNumber = 1;
  frameOver = false;
  frameScore = [];
  this.score = frameScore[frameScore.length - 1] || 0;
}

Game.prototype.roll = function(pins){
  this.rollsTracker.push(pins);
  if (pins == 10) { this.frameNumber ++ 
  } else { this.nextFrame(); };
};

Game.prototype.nextFrame = function() {
  frameOver = !frameOver
  if (frameOver == true) { this.frameNumber ++ };
};