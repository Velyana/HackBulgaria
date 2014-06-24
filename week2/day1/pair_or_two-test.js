"use strict";

var Pair = require("./pair_or_two").Pair;

exports.testPairEquals = function(test) {
  var p1 = new Pair(3, 6);
  var p2 = new Pair(3, 6);
  test.equal(true, p1.equals(p2));
  test.done();
};

exports.testPairToString = function(test) {
  var p = new Pair(1, 2);
  test.equal("(1, 2)", p.toString());
  test.done();
};

exports.testPairToList = function(test) {
  var p = new Pair(6, 6);
  test.deepEqual([6, 6], p.toList());
  test.done();
};

exports.testPairCombine = function(test) {
  var p = new Pair(4, 6);
  test.equal(10, p.combine(function(left, right) {
    return left + right; }));
  test.done();
};
