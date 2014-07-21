'use strict';
var Stock = require('./stock');

function Portfolio(name){
  this.name = name;
  this.stocks = [];
}

Portfolio.prototype.add = function(symbol, count){
  for( var i = 0; i < this.stocks.length; i++){
    if(symbol.toUpperCase() === this.stocks[i].symbol){
      this.stocks[i].count += count;
      return;
    }
  }  
  var newStock = new Stock(symbol, count);
  this.stocks.push(newStock);
};

Portfolio.prototype.del = function(symbol, count){
  for( var i = 0; i < this.stocks.length; i++){
    if(symbol.toUpperCase() === this.stocks[i].symbol){
      this.stocks[i].count -= count;
      if(this.stocks[i].count <= 0){
        this.stocks.splice(i,1);
      }
      return;
    }
  }
};

module.exports = Portfolio;
