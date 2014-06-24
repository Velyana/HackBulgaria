"use strict";

var Num = require("./number_prototype").Number;

exports.testNumberTimes = function(test) {
  test.deepEqual("OMG! OMG! OMG!", (3).times(function() {
  console.log("OMG!");
}));
  test.done();
};
