"use strict";

function Point(x, y) {

  this.getX = function() {
    return x;
  };

  this.getY = function() {
    return y;
  };

  this.xInc = function() {
    return x += 1;
  };
  this.xDec = function() {
    return x -= 1;
  };
  this.yInc = function() {
    return y += 1;
  };
  this.yDec = function() {
    return y -= 1;
  };

  this.setXInc = function(amount) {
    return x += amount;
  };

  this.setXDec = function(amount) {
    return x -= amount;
  };

  this.setYInc = function(amount) {
    return y += amount;
  };

  this.setYDec = function(amount) {
    return y -= amount;
  };

}

  Point.prototype.equals = function(point) {
    return this.getX() === point.getX() && this.getY() === point.getY();
  };

  Point.prototype.toString = function() {
  return ["(" + this.getX().toString() + ", " +
  this.getY().toString() + ")"].join("");
  };



exports.Point = Point;
/*
var a = new Point(3, 6);
console.log(a.getX());
console.log(a.getY());
*/
