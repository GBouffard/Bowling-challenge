function Game() {
  this.rollsTracker = [];
  this.frameNumber = 1;
  frameOver = false;
  left = 10;
  frameScore = [];
  this.score = frameScore[frameScore.length - 1] || 0;
}

Game.prototype.roll = function(pins){
  this.rollValidation(pins)
  if ((pins == 10) && (this.frameNumber != 10)) { this.frameNumber ++ 
  } else { this.nextFrame(pins); };
};

Game.prototype.nextFrame = function(pins) {
  if (frameOver == true) { this.frameNumber ++ };
  frameOver = !frameOver;
};

Game.prototype.rollValidation = function(pins) {
  if ((pins > 10) || (pins < 1)) { throw new Error('This is not a valid input!')};
  if (frameOver == false) { left = 10 - pins };
  if ((frameOver == true) && (pins > left)) { throw new Error('You cannot enter that number!')};
  if (this.frameNumber > 10) { throw new Error('This game is over!') };
  this.rollsTracker.push(pins);
};
