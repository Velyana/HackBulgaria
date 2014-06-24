"use strict";

  Array.prototype.first = function() {
    if(this.length === 0) {
      throw new TypeError("Empty array!");
    }
    return this[0];
  };

  Array.prototype.range = function(from, to) {
  var result = [];
  while(from <= to) {
    result.push(from);
    from = from +1;
  }
  return result;
};

  Array.prototype.sum = function() {
    return this.reduce(function(a, b) {
      return a + b;
    });

  };

  Array.prototype.average = function() {
    return this.sum()/this.length;
  };

exports.Array = Array;
