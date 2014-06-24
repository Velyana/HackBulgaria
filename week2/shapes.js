"use strict";

function Shape(type) {
  this.getType = function() {
    return type;
  };
}

Shape.prototype.area = function() {
  throw new Error("Cannot call area of Shape. Use subclasses!");
};

function Rectangle(a, b) {
  this.getA = function() {
    return a;
  };
  this.getB = function() {
    return b;
  };
  Shape.call(this, "rectangle");
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.constructor = Rectangle;
Rectangle.prototype.area = function() {
   return this.getA() * this.getB();
 };


function Triangle(a, h) {
  this.getA = function() {
    return a;
  };
  this.getH = function() {
    return h;
  };
  Shape.call(this, "triangle");

}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.constructor = Triangle;
Triangle.prototype.area = function() {
   return (this.getA() * this.getH())/2;
 };

function Circle(r) {
  this.getR = function() {
    return r;
  };
  Shape.call(this, "circle");
}
Circle.prototype = Object.create(Shape.prototype);
Circle.constructor = Circle;
Circle.prototype.area = function() {
   return this.getR() * 3.14 * 3.14;
 };

var r = new Rectangle(1, 2);
console.log(r.area());

var t = new Triangle(6, 3);
console.log(t.area());

var c = new Circle(2);
console.log(c.area());
