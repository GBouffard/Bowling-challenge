describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });
  
  describe('generic rules', function() {
    it('starts with a score of 0', function() {
      expect(game.score).toEqual(0);
    });

    xit('tracks the pins that have fallen at each roll', function() {
    });

    xit('knows which frame we are at each stage', function() {
    });

    xit('knows that a 2nd roll cannot knock more pins out than what is left after the first roll', function() {
    });

    xit('knows that it\s not possible to play more than 10 frames', function() {
    });
  });

  describe('from frame 1 to 9', function() {
    xit('knows that a frame is over when a strike happens', function() {
    });
  });

  describe('on the 10th frame', function() {
    xit('knows that a strike on the first roll means an additional 2 rolls to play', function() {
    });

    xit('knows that a spare on the 2nd roll means an additional roll to play', function() {
    });
  });

  describe('total score calculation', function() {
    xit('calculates the frame score and adds it to the total right away if the sum of that frame is inferior to 10', function() {
    });

    xit('after a spare, calculates the frame score and adds it to the total only after a spare roll has been made', function() {
    });

    xit('after a strike, calculates the frame score and adds it to the total only after 2 spare rolls have been made', function() {
    });
  });

  describe('gameplay', function() {
    xit('a player can play a standard game and get the expected score', function() {
    });

    xit('a player can play a gutter game and get the expected score: a big fat 0!', function() {
    });

    xit('a player can play a perfect game and get the expected score: an amazing 300!', function() {
    });
  });

  describe('to restart a game', function() {
    xit('a player has the option to reset the total score to 0', function() {
    });
  });
});
