describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });
  
  describe('generic rules', function() {
    it('starts with a score of 0', function() {
      expect(game.score).toEqual(0);
    });

    it('tracks the pins that have fallen at each roll', function() {
      game.roll(5);
      game.roll(4);
      game.roll(10);
      expect(game.rolls).toEqual([5, 4, 10]);
    });

    it('knows which frame we are at each stage', function() {
      game.roll(5);
      game.roll(4);
      expect(game.frameNumber).toEqual(2);
      game.roll(10);
      expect(game.frameNumber).toEqual(3);
      game.roll(9);
      game.roll(1);
      expect(game.frameNumber).toEqual(4);
    });

    it('is not possible to knock more than 10 pins down in a roll or enter a wrong input', function() {
      expect(function(){game.roll(11)}).toThrowError('This is not a valid input!');
    });

    it('a 2nd roll cannot knock more pins out than what is left on the alley', function() {
      game.roll(5);
      expect(function(){game.roll(6)}).toThrowError('You cannot enter that number!');
    });

    it('it is not possible to play more than 10 frames', function() {
      for(i=0;i<20;i++) {
        game.roll(1);
      };
      expect(function(){game.roll(1)}).toThrowError('This game is over!');
    });
  });

  describe('from frame 1 to 9', function() {
    it('knows that a frame is over when a strike happens', function() {
      game.roll(10);
      expect(game.frameNumber).toEqual(2);
      game.roll(10);
      expect(game.frameNumber).toEqual(3);
    });
  });

  describe('on the 10th frame', function() {
    beforeEach(function() {
      for(i=0;i<18;i++) { 
        game.roll(1);  
      };
    });
    it('knows that a strike on the first roll means an additional 2 rolls to play', function() {    
      game.roll(10);
      expect(game.frameNumber).toEqual(10);
    });

    it('knows that a spare on the 2nd roll means an additional roll to play', function() {            
      game.roll(4);
      game.roll(6); 
      expect(game.frameNumber).toEqual(10);
    });
  });

  describe('total score calculation', function() {
    it('calculates the frame score right away if it wasn\'t a spare or a strike', function() {
      game.roll(5);
      game.roll(4);
      game.roll(7);
      game.roll(1);
      expect(game.frameScore).toEqual([9, 17]);
      expect(game.score).toEqual(17);             
    });

    it('after a spare, calculates the frame score only after a spare roll has been made', function() {
      game.roll(6);
      game.roll(4);
      game.roll(5);
      game.roll(5);
      game.roll(1);
      game.roll(3);
      expect(game.frameScore).toEqual([15, 26, 30]);
      expect(game.score).toEqual(30);
    });

    it('after a strike, calculates the frame score only after 2 spare rolls have been made', function() {
      game.roll(10);
      game.roll(4);
      game.roll(5);
      game.roll(10);
      game.roll(10);
      game.roll(4);
      expect(game.frameScore).toEqual([19, 28, 52]);
      expect(game.score).toEqual(52);
    });

    it('calulcates the correct score on the 10th frame', function(){
     for(i=0;i<14;i++) {
        game.roll(1);
      };
     game.roll(10);
     game.roll(4);
     game.roll(6);
     game.roll(6);
     game.roll(4);
     game.roll(8);
    expect(game.frameScore).toEqual([2, 4, 6, 8, 10, 12, 14, 34, 50, 68]);
    expect(game.score).toEqual(68);
    });
  });

  describe('gameplay - type of games', function() {
    it('A full 10 frames random game gives the expected results', function() {
     game.roll(1);
     game.roll(4);
     game.roll(4);
     game.roll(5);
     game.roll(6);
     game.roll(4);
     game.roll(5);
     game.roll(5);
     game.roll(10);
     game.roll(0);
     game.roll(1);
     game.roll(7);
     game.roll(3);
     game.roll(6);
     game.roll(4);
     game.roll(10);
     game.roll(2);
     game.roll(8);
     game.roll(6);
    expect(game.frameScore).toEqual([5, 14, 29, 49, 60, 61, 77, 97, 117, 133]);
    expect(game.score).toEqual(133);     
    });

    it('A gutter game test gives the expected results: a big fat 0!', function() {
     for(i=0;i<20;i++) {
        game.roll(0);
      };
    expect(game.score).toEqual(0);
    });

    xit('A perfect game gives the expected results: an amazing 300!', function() {
    });
  });

  describe('to restart a game', function() {
    xit('a player has the option to reset the total score to 0', function() {
    });
  });
});
