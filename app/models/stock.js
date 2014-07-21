'use strict';

function Stock(symbol, count){
  this.symbol = symbol.toUpperCase();
  this.count = parseInt(count);
  this.price = 0;
}

module.exports = Stock;
