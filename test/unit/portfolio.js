/* global describe, it */
'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');
var Stock = require('../../app/models/stock');

describe('portfolio', function(){
  describe('constructor', function(){
    it('should create a new portfolio object', function(){
      var test = new Portfolio('name');
      expect(test).to.be.instanceof(Portfolio);
      expect(test.name).to.equal('name');
      expect(test.stocks.length).to.equal(0);
    });
  });
  describe('#add', function(){
    it('should add a stock to the portfolio & check for dupes', function(){
    var tech = new Portfolio('Tech Stocks');
    tech.add('aapl', 25);
    tech.add('amzn', 35);
    tech.add('aapl', 50);
    
    expect(tech.stocks[0]).to.be.instanceof(Stock);
    expect(tech.stocks).to.have.length(2);
    expect(tech.stocks[0].count).to.equal(75);
    expect(tech.stocks[1].count).to.equal(35);

    });
  });
});
