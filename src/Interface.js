var game = new Game();

$(document).ready(function(){
  increment = 1;

  function updateBoxes() {
    $('#box'+increment).text(game.rolls[game.rolls.length - 1]);
    increment++;
  };

  $('#hit5').click(function(){
    game.roll(5);
    updateBoxes();
  });
});
