"use strict";

var Point = require("./point_in_the_sky").Point;

exports.testPointEquals1 = function(test) {
  var p1 = new Point(1, 1);
  var p2 = new Point(1, 10);
  test.equal(false, p1.equals(p2));
  test.done();
};

exports.testPointEquals2 = function(test) {
  var p1 = new Point(1, 100);
  var p2 = new Point(1, 100);
  test.equal(true, p1.equals(p2));
  test.done();
};

exports.testPointToStrig = function(test) {
  var p = new Point(1, 1);
  test.equal("(1, 1)", p.toString());
  test.done();
};
