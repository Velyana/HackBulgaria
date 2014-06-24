"use strict";

var Point = require("./point_in_the_sky").Point;

function Robot(startPoint) {

  this.moveLeft = function(amount) {
    return startPoint.setXDec(amount);

  };
  this.moveRight = function(amount) {
    return startPoint.setXInc(amount);
  };
  this.moveUp = function(amount) {
    return startPoint.setYDec(amount);
  };
  this.moveDown = function(amount) {
    return startPoint.setYInc(amount);
  };
  this.getPosition = function() {
    var p = new Point(startPoint.getX(), startPoint.getY());
    return p;
  };

}

  var robot = new Robot(new Point(0, 0));

  robot.moveLeft(10);
  robot.moveDown(5);

  console.log(robot.getPosition().toString());

exports.Robot = Robot;
