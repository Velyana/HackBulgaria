"use strict";

var queue = {
  arr : [],
  push : function(item) {
    return this.arr.push(item);
  },
  pop : function() {
    return this.arr.pop();
  },
  isEmpty : function() {
    return this.arr.length === 0;
  }
};
//var q = Object.create(queue);

console.log(queue.isEmpty());
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.isEmpty());
queue.pop();
console.log(queue.arr);

