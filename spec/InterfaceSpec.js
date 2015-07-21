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

    it('a spare with 0 and 10 still outputs / in the 2nd box and not a X', function() { 
      $('#hit0').click();
      $('#hit10').click();
      expect("#box2").toHaveText('/');
    });

    it('if a player tries to knock more pins out than allowed, an error message is displayed', function() { 
      $('#hit8').click();  
      expect(function(){$('#hit7').click()}).toThrowError('You cannot enter that number!');
      expect(window.onerror).not.toBe(null);
      expect("#error").not.toBe(null);
    });
  });

  describe('Playing frames numbers 2 to 9', function() {  
    it('the behaviors tested above for the first frame apply for frames 2 to 9', function() { 
      random9FramesGame();
      expect("#box1").toHaveText('7');
      expect("#box2").toHaveText('2');
      expect("#box3").toHaveText('X');
      expect("#box4").toBeEmpty();
      expect("#box5").toHaveText('6');
      expect("#box6").toHaveText('/');
      expect("#box7").toHaveText('X');
      expect("#box8").toBeEmpty();
      expect("#box9").toHaveText('7');
      expect("#box10").toHaveText('/');
      expect("#box11").toHaveText('7');
      expect("#box12").toHaveText('1');
      expect("#box13").toHaveText('9');
      expect("#box14").toHaveText('0');
      expect("#box15").toHaveText('0');
      expect("#box16").toHaveText('/');
      expect("#box17").toHaveText('5');
      expect("#box18").toHaveText('/');
    });
  });

  describe('Playing frame number 10', function() {
    beforeEach(function() {
      random9FramesGame()
    });

    it('writes a / in the 2nd box if a spare is made', function() { 
      $('#hit5').click();
      $('#hit5').click();
      expect("#box19").toHaveText('5');
      expect("#box20").toHaveText('/');
    });

    it('writes a X in all of the 3 boxes if 3 strikes are made', function() { 
      $('#hit10').click();
      $('#hit10').click();
      $('#hit10').click();
      expect("#box19").toHaveText('X');
      expect("#box20").toHaveText('X');
      expect("#box21").toHaveText('X');
    });
  });

  describe('Score displays', function() {
    it('2 first rolls not being spare or strike immediately output the score in the 1st score box', function() { 
      $('#hit5').click();
      $('#hit3').click();
      expect("#score1").toHaveText('8');
    });

    it('A full game excluding strikes and spares output the 10 correct cumulative scores', function() { 
      $('#hit5').click();
      $('#hit1').click();
      expect("#score1").toHaveText('6');
      $('#hit4').click();
      $('#hit5').click();
      expect("#score2").toHaveText('15');
      $('#hit5').click();
      $('#hit2').click();
      expect("#score3").toHaveText('22');
      $('#hit9').click();
      $('#hit0').click();
      expect("#score4").toHaveText('31');
      $('#hit0').click();
      $('#hit1').click();
      expect("#score5").toHaveText('32');
      $('#hit7').click();
      $('#hit2').click();
      expect("#score6").toHaveText('41');
      $('#hit5').click();
      $('#hit3').click();
      expect("#score7").toHaveText('49');
      $('#hit2').click();
      $('#hit2').click();
      expect("#score8").toHaveText('53');
      $('#hit8').click();
      $('#hit0').click();
      expect("#score9").toHaveText('61');
      $('#hit5').click();
      $('#hit3').click();
      expect("#score10").toHaveText('69');
    });

    it('A full game including strikes and spares output the 10 correct cumulative scores', function() { 
      $('#hit6').click();
      $('#hit4').click();
      $('#hit5').click();
      expect("#score1").toHaveText('15');
      $('#hit4').click();
      expect("#score2").toHaveText('24');
      $('#hit10').click();
      $('#hit9').click();
      $('#hit1').click();
      expect("#score3").toHaveText('44');
      $('#hit6').click();
      expect("#score4").toHaveText('60');
      $('#hit2').click();
      expect("#score5").toHaveText('68');
      $('#hit10').click();
      $('#hit10').click();
      $('#hit7').click();
      expect("#score6").toHaveText('95');
      $('#hit3').click();
      expect("#score7").toHaveText('115');
      $('#hit0').click();
      expect("#score8").toHaveText('125');
      $('#hit10').click();
      $('#hit9').click();
      expect("#score9").toHaveText('144');
      $('#hit1').click();
      $('#hit10').click();
      expect("#score10").toHaveText('164');
    });

    it('A gutter game gives the expected visual results: a big fat 0!', function() { 
      for(i=0;i<20;i++) {
        $('#hit0').click();
      };
      expect("#score10").toHaveText('0');
    });

    xit('A perfect game gives the expected visual results: an amazing 300!', function() { 
    });
  });

  describe('Start a new game', function() {
    xit('starts with a blank new scoresheet if New Scoresheet is being clicked', function() { 
    });
  });
});

function random9FramesGame() {
  $('#hit7').click();
  $('#hit2').click();
  $('#hit10').click();
  $('#hit6').click();
  $('#hit4').click();
  $('#hit10').click();
  $('#hit7').click();
  $('#hit3').click();
  $('#hit7').click();
  $('#hit1').click();
  $('#hit9').click();
  $('#hit0').click();
  $('#hit0').click();
  $('#hit10').click();
  $('#hit5').click();
  $('#hit5').click();
};