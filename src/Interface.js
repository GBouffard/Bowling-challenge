var game = new Game();

$(document).ready(function() {
  var increment = 1;

  function updateBoxes() {
    $('#box'+String(increment)).text(game.rolls[game.rolls.length -1]);
    increment++;
  };

  $('#hit0').click(function(){
    game.roll(0);
    updateBoxes();
  });

  $('#hit1').click(function(){
    game.roll(1);
    updateBoxes();
  });

  $('#hit2').click(function(){
    game.roll(2);
    updateBoxes();
  });

  $('#hit3').click(function(){
    game.roll(3);
    updateBoxes();
  });

  $('#hit4').click(function(){
    game.roll(4);
    updateBoxes();
  });

  $('#hit5').click(function(){
    game.roll(5);
    updateBoxes();
  });

  $('#hit6').click(function(){
    game.roll(6);
    updateBoxes();
  });

  $('#hit7').click(function(){
    game.roll(7);
    updateBoxes();
  });

  $('#hit8').click(function(){
    game.roll(8);
    updateBoxes();
  });

  $('#hit9').click(function(){
    game.roll(9);
    updateBoxes();
  });

  $('#hit10').click(function(){
    game.roll(10);
    updateBoxes();
  });
});