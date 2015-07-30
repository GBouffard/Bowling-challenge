var game = new Game();

$(document).ready(function() {
  var increment = 1;
  var SparesWritter = 10;

  function updateScore() {
    game.roll(pins);
    errorTracker();
    writeInBoxes();
    SparesWritter = game.leftPins
    writeInScores();
    increment++;
  };

  function errorTracker() {
    $('#error').html('');
    window.onerror = function () {
      $('#error').html('You cannot choose that number!');
    };
  };

  function writeInBoxes() {
    if( SparesWritter == pins && game.frameOver == false) {
      $('#box'+String(increment)).text('/');
    } else {
      $('#box'+String(increment)).text(game.rolls[game.rolls.length -1]);
    };
  };

  function writeInScores() {
    for(n=1;n<11;n++) {
      $('#score'+String(n)).text(game.frameScore[n-1]);
    };
  };

  $('#hit0').click(function(){
    pins = 0;
    updateScore();
  });

  $('#hit1').click(function(){
    pins = 1;
    updateScore();
  });

  $('#hit2').click(function(){
    pins = 2;
    updateScore();
  });

  $('#hit3').click(function(){
    pins = 3;
    updateScore();
  });

  $('#hit4').click(function(){
    pins = 4;
    updateScore();
  });

  $('#hit5').click(function(){
    pins = 5;
    updateScore();
  });

  $('#hit6').click(function(){
    pins = 6;
    updateScore();
  });

  $('#hit7').click(function(){
    pins = 7;
    updateScore();
  });

  $('#hit8').click(function(){
    pins = 8;
    updateScore();
  });

  $('#hit9').click(function(){
    pins = 9;
    updateScore();
  });

  $('#hit10').click(function(){
    if (game.frameOver == false || game.frameNumber == 10) {
      strikeHappened();
    } else {
      pins = 10;
      updateScore();
    };
  });

  function strikeHappened(){
    game.roll(10);
    writeInScores();
    $('#box'+String(increment)).text('X');
    if (game.frameNumber != 10) { increment++ };
    increment++;
  };

  $('#newScoreSheet').click(function(){
    initialValues();
    clearTable();
  });

  function initialValues() {
    game.rolls = [];
    game.frameNumber = 1;
    game.frameOver = false;
    game.frame10rolls = []
    game.frameScore = [];
    game.score = 0;
    increment = 1;
    SparesWritter = 10;
  };

  function clearTable() {
    for(n=1;n<22;n++) {
      $('#box'+n).text('');
    };
    for(n=1;n<11;n++) {
      $('#score'+n).text('');
    };    
  };
});
