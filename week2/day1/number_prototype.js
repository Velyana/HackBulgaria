"use strict";

  Array.prototype.range = function(from, to) {
  var result = [];
  while(from <= to) {
    result.push(from);
    from = from +1;
    }
    return result;
  };

  Number.prototype.times = function(action) {
    return [].range(1, this).map(function() {
    return action;
  }).forEach(function (f) {
    f();
  });

  };

(3).times(function() {
  console.log("OMG!");
});
exports.Number = Number;
