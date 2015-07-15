function Game() {
  this.rollsTracker = []
  frameScore = []
  this.score = frameScore[frameScore.length - 1] || 0;
}

Game.prototype.roll = function(pins){
  this.rollsTracker.push(pins);
};

