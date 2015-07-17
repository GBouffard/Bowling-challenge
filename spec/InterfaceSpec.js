describe('Interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('views/index.html');
    $.holdReady(false);
  });

  describe('At the beginning', function() {
    xit('starts with empty boxes for the rolls and the scores', function() { 
    });
  });

  describe('Playing frame number 1', function() {  
    xit('A first roll that isn\'t a strike outputs the pins knocked out in the first box', function() { 
    });

    xit('A second roll that dosen\'t make a spare outputs the pins knocked out in the second box', function() { 
    });

    xit('if a spare is made, the output in the 2nd box appears as a /', function() { 
    });

    xit('if a strike is made, the output in the 1st box appears as a X', function() { 
    });

    xit('if a strike is made, the output in the 2nd box appears as empty', function() { 
    });

    xit('if a player tries to knock more pins out than allowed, an error message is displayed', function() { 
    });
  });

  describe('Playing frames numbers 2 to 9', function() {  
    xit('the behaviors tested above for the first frame apply for all these frames', function() { 
    });
  });

  describe('Playing frame number 10', function() {  
    xit('writes a X in all of the 3 boxes if 3 strikes are made', function() { 
    });
  });

  describe('Score displays', function() {  
    xit('2 first rolls immediately output the score in the 1st score box', function() { 
    });

    xit('A full game excluding strikes and spares output the 10 correct cumulative scores', function() { 
    });

    xit('A full game including strikes and spares output the 10 correct cumulative scores', function() { 
    });

    xit('A gutter game gives the expected visual results: a big fat 0!', function() { 
    });

    xit('A perfect game gives the expected visual results: an amazing 300!', function() { 
    });
  });

  describe('Start a new game', function() {  
    xit('starts with a blank new scoresheet if New Scoresheet is being clicked', function() { 
    });
  });
});