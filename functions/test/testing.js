const Mocha = require('mocha')
const Food = require('../food');
const Fact = require('../fact')

var assert = require('assert');
describe('CheckDailyFood', function() { // eslint-disable-line prefer-arrow-callback
  describe('defaultDailyResponse', function() { // eslint-disable-line prefer-arrow-callback

    let food = new Food();
    let response = food.isSafe("radicchio");

    it('Food response shouldn\'t be empty', function(){ // eslint-disable-line prefer-arrow-callback
      assert.notEqual(response, null);
    });
  });
});

describe('CheckRandomFact', function() { // eslint-disable-line prefer-arrow-callback
  describe('randomFact', function() { // eslint-disable-line prefer-arrow-callback

    let fact = new Fact();
    let response = fact.getRandom();

    it('Fact response shouldn\'t be empty', function(){ // eslint-disable-line prefer-arrow-callback
      assert.notEqual(response, null);
    });
  });
});
