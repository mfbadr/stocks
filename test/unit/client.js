/* global describe, it */
'use strict';

var expect = require('chai').expect;
var Client = require('../../app/models/client');

describe('client', function(){
  describe('constructor', function(){
    it('should create a new client with name, balance, and array of portfolios', function(){});
      var client = new Client('Bob Smith', 10000);
      expect(client.name).to.equal('Bob Smith');
      expect(client.balance).to.equal(10000);
      expect(client).to.be.instanceof(Client);
      expect(client.portfolios).to.have.length(1);
  });
  describe('#purchase', function(){
//    it('should allow the user to create a portfolio', function(){});
  
  });
  describe('#sell', function(){});
});
