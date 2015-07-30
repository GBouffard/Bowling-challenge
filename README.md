[![Build Status](https://travis-ci.org/GBouffard/Bowling-challenge.svg)](https://travis-ci.org/GBouffard/Bowling-challenge) [![Code Climate](https://codeclimate.com/github/GBouffard/Bowling-challenge/badges/gpa.svg)](https://codeclimate.com/github/GBouffard/Bowling-challenge)

:bowling: Bowling Challenge :bowling:
=================

This project is the week 5 challenge from Makers Academy. The task was to count and sum the scores of a bowling game for one player in JavaScript and make an interface in JQuery.

- A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. 
-In every frame the player can roll one or two times (or maybe 3 in the last frame).
- The actual number depends on strikes and spares. 
- The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. 
- After every frame the 10 pins are reset. 

You can find the scoring rules on this wikipedia [link](http://en.wikipedia.org/wiki/Ten-pin_bowling). It was suggested that our tests should include:
-a Gutter Game: a Gutter Game is when the player never hits a pin (20 zero scores).
-a Perfect Game: A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.



Heroku
----
[Guillaume's Bowling Game]()

![](public/bowling_screenshot.png)

Objectives of exercise
----
To learn about Javascript, Jasmine and jQuery.

Technologies used
----
- Javascript
- Jasmine
- JQuery
- HTML, ejs & CSS
- Node.js
- Heroku

How to run it
----
```
git clone git@github.com:GBouffard/Bowling-challenge.git
cd Bowling-challenge
npm install
node server.js
```
By opening your browser on http://localhost:8080/, you can now you can count the score of a game you play.

How to run tests
----
```
cd Bowling-challenge
open SpecRunner.html
```

and this is what you should see:

![](public/Jasmine_tests.png)