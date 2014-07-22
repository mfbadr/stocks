'use strict';
/* global prompt:true */
var prompt = require('sync-prompt').prompt;

function Client(name, balance){
  
  this.name = name;
  this.balance = parseInt(balance);
  var firstPort = prompt('Please name your first portfolio: ');
  this.portfolios = [[firstPort]];
}

Client.prototype.sell = function(symbol, count, cb){

};


module.exports = Client;


