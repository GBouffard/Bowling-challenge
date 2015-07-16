function Game() {
  this.rolls = [];
  this.frameNumber = 1;
  frameOver = false;
  frame10rolls = []
  left = 10;
  this.frameScore = [];
  this.score = 0;
}

Game.prototype.roll = function(pins){
  this.rollValidation(pins);
  if (this.frameNumber == 10 ) { this.frame10Logic(pins) };
  if (this.frameNumber != 10) { this.frame1To9Logic(pins) };
};

Game.prototype.rollValidation = function(pins) {
  if (pins > 10 || pins < 1) { throw new Error('This is not a valid input!')};
  if (this.frameNumber > 10) { throw new Error('This game is over!') };
  if (frameOver == true && pins > left) { throw new Error('You cannot enter that number!')};
  this.validRoll(pins);
};

Game.prototype.validRoll = function(pins) {
  if (frameOver == false) { left = 10 - pins };
  this.rolls.push(pins);
  if (frameOver == false) { this.calculateSpareAtPreviousFrame() };  
};

Game.prototype.frame1To9Logic = function(pins) {
  this.doubleStrikeBefore();
  if (pins == 10) { this.frameNumber ++ 
  } else { this.notAStrike(pins); };
};

Game.prototype.notAStrike = function(pins) {
  if (frameOver == true) { this.calculateNoStrikeScore() };
  frameOver = !frameOver;
};

Game.prototype.frame10Logic = function(pins) {
  frame10rolls.push(pins);
  if (frame10rolls.length == 2 && frame10rolls[0] + frame10rolls[1] < 10) { this.frameNumber ++ };
  if (frame10rolls.length == 3) { this.frameNumber ++ };
};

Game.prototype.calculateNoStrikeScore = function(){
  this.frameNumber ++;
  this.calculateStrikeAtPreviousFrame();
  if (this.rolls[this.rolls.length - 1] + this.rolls[this.rolls.length - 2] != 10) {
    this.score = this.score + this.rolls[this.rolls.length - 1] + this.rolls[this.rolls.length - 2]
    this.frameScore.push(this.score);
  };
};

Game.prototype.calculateSpareAtPreviousFrame = function(){
  if (this.rolls[this.rolls.length - 2] + this.rolls[this.rolls.length - 3] == 10) {
  this.score = this.score + 10 + this.rolls[this.rolls.length - 1]
  this.frameScore.push(this.score);
  };
};

Game.prototype.calculateStrikeAtPreviousFrame = function(){
  if (this.rolls[this.rolls.length - 3] == 10) {
  this.score = this.score + 10 + this.rolls[this.rolls.length - 1] + this.rolls[this.rolls.length - 2];
  this.frameScore.push(this.score);
  };
};

Game.prototype.doubleStrikeBefore = function(){
  if (this.rolls[this.rolls.length - 3] == 10 && this.rolls[this.rolls.length - 2] == 10) {
  this.score = this.score + 20 + this.rolls[this.rolls.length - 1];
  this.frameScore.push(this.score);
  };
};


