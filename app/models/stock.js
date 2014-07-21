'use strict';

function Stock(symbol, count){
  this.symbol = symbol.toUpperCase();
  this.count = parseInt(count);
}

module.exports = Stock;
