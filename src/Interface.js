var game = new Game();

$(document).ready(function() {
  var increment = 1;
  var SparesWritter = 10;

  function updateScore() {
    game.roll(pins);
    writeInBoxes();
    SparesWritter = game.leftPins
    increment++;
  };

  function writeInBoxes() {
    errorTracker();
    if( SparesWritter == pins && game.frameOver == false) {
      $('#box'+String(increment)).text('/');
    } else {
      $('#box'+String(increment)).text(game.rolls[game.rolls.length -1]);
    };
  };

  function errorTracker() {
    $('#error').html('');
    window.onerror = function () {
      $('#error').html('You cannot choose that number!');
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
    if (game.frameOver == false) {
      strikeHappened();
    } else {
      pins = 10;
      updateScore();
    };
  });

  function strikeHappened(){
    game.roll(10);
    $('#box'+String(increment)).text('X');
    increment = increment+2;
  };
});
