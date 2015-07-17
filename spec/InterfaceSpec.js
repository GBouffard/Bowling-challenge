describe('Interface', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('views/index.html');
    $.holdReady(false);
  });
});