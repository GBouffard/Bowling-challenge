function Game() {
  this.rolls = [];
  this.frameNumber = 1;
  this.frameOver = false;
  this.frame10rolls = [];
  this.frameScore = [];
  this.score = 0;
}

Game.prototype.roll = function(pins){
  this.rollValidation(pins);
  if (this.frameNumber === 10 ) { this.frame10Logic(pins); }
  if (this.frameNumber !== 10) { this.frame1To9Logic(pins); }
};

Game.prototype.rollValidation = function(pins) {
  if (pins > 10 || pins < 0) { throw new Error('This is not a valid input!')}
  if (this.frameNumber > 10) { throw new Error('This game is over!') }
  if (this.frameOver === true && pins > this.leftPins) { throw new Error('You cannot enter that number!')}
  this.validRoll(pins);
};

Game.prototype.validRoll = function(pins) {
  if (this.frameOver === false) { this.leftPins = 10 - pins } else { this.leftPins = 10 }
  this.rolls.push(pins);
  if (this.frameOver === false && this.frameNumber < 10 ) { this.caclulateOnBall1() }
};

Game.prototype.caclulateOnBall1 = function(){
  this.doubleStrikeCalculator();
  this.spareCalculator();
};

Game.prototype.frame1To9Logic = function(pins) {
  if (pins === 10 && this.frameOver === false) { this.frameNumber ++ 
  } else { this.notAStrike(pins) }
};

Game.prototype.notAStrike = function(pins) {
  if (this.frameOver === true) { this.noStrikeNoSpareCalculator() }
  this.frameOver = !this.frameOver;
};

Game.prototype.frame10Logic = function(pins) {
  this.frame10rolls.push(pins);
  if (this.frame10rolls.length === 1) { this.caclulateOnBall1() }
  if (this.frame10rolls.length === 2) { this.secondRollat10() }
  if (this.frame10rolls.length === 3) { this.closingRoll() }
};

Game.prototype.secondRollat10 = function(){
  if (this.rolls[this.rolls.length - 3] === 10) { this.strikeCalculator() }
  if (this.frame10rolls[0] + this.frame10rolls[1] < 10) { this.noStrikeNoSpareCalculator() }
};

Game.prototype.noStrikeNoSpareCalculator = function(){
  this.frameNumber ++;
  if (this.rolls[this.rolls.length - 3] === 10) { this.strikeCalculator() }
  this.notA10SumCalculator();
};

Game.prototype.notA10SumCalculator = function() {
  if (this.rolls[this.rolls.length - 1] + this.rolls[this.rolls.length - 2] !== 10) {
    this.score = this.score + this.rolls[this.rolls.length - 1] + this.rolls[this.rolls.length - 2]
    this.frameScore.push(this.score);
  }
};

Game.prototype.spareCalculator = function(){
  if (this.rolls[this.rolls.length - 2] + this.rolls[this.rolls.length - 3] === 10 && this.frame10rolls.length < 2) {
    this.score = this.score + 10 + this.rolls[this.rolls.length - 1]
    this.frameScore.push(this.score);
  }
};

Game.prototype.strikeCalculator = function(){
  this.score = this.score + 10 + this.rolls[this.rolls.length - 1] + this.rolls[this.rolls.length - 2];
  this.frameScore.push(this.score);
};

Game.prototype.doubleStrikeCalculator = function(){
  if (this.rolls[this.rolls.length - 3] == 10 && this.rolls[this.rolls.length - 2] == 10 && this.rolls[this.rolls.length - 4] != 0) {
    this.score = this.score + 20 + this.rolls[this.rolls.length - 1];
    this.frameScore.push(this.score);
  }
};

Game.prototype.closingRoll = function() {
  if (this.frame10rolls[0] == 10) { this.strikeCalculator() 
  } else if (this.frame10rolls[0] + this.frame10rolls[1] == 10) { this.finalSpareCalculator() }
  this.frameNumber ++
};

Game.prototype.finalSpareCalculator = function(){
  this.score = this.score + 10 + this.frame10rolls[this.frame10rolls.length - 1];
  this.frameScore.push(this.score);
};
