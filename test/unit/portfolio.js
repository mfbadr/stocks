/* global describe, it */
'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');

describe('portfolio', function(){
  describe('constructor', function(){
    it('should create a new portfolio object', function(){
      var test = new Portfolio('name');
      expect(test).to.be.instanceof(Portfolio);
      expect(test.name).to.equal('name');
      expect(test.stocks.length).to.equal(0);
    });
  });
});
