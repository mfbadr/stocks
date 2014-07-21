'use strict';

var request = require('request');


function Stock(symbol, count){
  this.symbol = symbol.toUpperCase();
  this.count = parseInt(count);
  this.price = 0;
}

Stock.getQuote = function(symbol, cb){
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=' + symbol.toUpperCase();

  request(url, function(error, response, body){
    body = JSON.parse(body);
    console.log(body.LastPrice);
    cb(body.LastPrice);
  });
};

module.exports = Stock;
