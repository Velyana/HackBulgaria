"use strict";

var Point = require("./point_in_the_sky").Point;
var Robot = require("./robot").Robot;

exports.testRobot = function(test) {
  var robot = new Robot(new Point(0, 0));

  robot.moveLeft(10);
  robot.moveDown(5);

  test.equal("(-10, 5)", robot.getPosition().toString());
  test.done();
};
