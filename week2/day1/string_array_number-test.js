"use strict";

var Str = require("./string_array_number").String;

exports.testStringCapitalize = function(test) {
  test.deepEqual("JAVASCRIPT", "javascript".capitalize());
  test.done();
};

exports.testStringDasherize = function(test) {
  test.deepEqual("border-bottom-width", "border_bottom_width".dasherize());
  test.done();
};

exports.testStringTimes = function(test) {
  test.deepEqual("panda panda panda", "panda".times(3));
  test.done();
};

exports.testStringBlank1 = function(test) {
  test.equal(true, "   ".blank());
  test.done();
};

exports.testStringBlank1 = function(test) {
  test.equal(false, " v ".blank());
  test.done();
};
