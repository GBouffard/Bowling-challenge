describe('Interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('views/index.ejs');
    $.holdReady(false);
  });

  describe('At the beginning', function() {
    it('starts with empty boxes for the rolls and the scores', function() { 
      for(n=1;n<22;n++) {
        expect("#box"+n).toBeEmpty();
      };
      for(n=1;n<1;n++) {
        expect("#score"+n).toBeEmpty();
      };
    });
  });

  describe('Playing frame number 1', function() {  
    it('A first roll that isn\'t a strike outputs the pins knocked out in the first box', function() { 
      $('#hit5').click();
      expect("#box1").toHaveText(5);
    });

    it('A second roll that dosen\'t make a spare outputs the pins knocked out in the second box', function() { 
      $('#hit5').click();
      $('#hit3').click();        
      expect("#box1").toHaveText(5);
      expect("#box2").toHaveText(3);
    });

    it('if a spare is made, the output in the 2nd box appears as a /', function() { 
      $('#hit7').click();
      $('#hit3').click();        
      expect("#box2").toHaveText('/');      
    });

    it('if a strike is made, the output in the 1st box appears as a X', function() { 
      $('#hit10').click();
      expect("#box1").toHaveText('X');
    });

    it('if a strike is made, the output in the 2nd box appears as empty', function() { 
      $('#hit10').click();
      $('#hit10').click();
      expect("#box2").toBeEmpty();

    });

    xit('if a player tries to knock more pins out than allowed, an error message is displayed', function() { 
    });
  });

  describe('Playing frames numbers 2 to 9', function() {  
    xit('the behaviors tested above for the first frame apply for all these frames', function() { 
    });
  });

  describe('Playing frame number 10', function() {  

    xit('writes a / in the 2nd box if a spare is made', function() { 
    });

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