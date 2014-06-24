"use strict";

var eventQueue = (function() {
  var _private = {
    dict : {}
  };
  return {
    on : function(eventName, callback) {
      if(!_private.dict[eventName]) {
        _private.dict[eventName] = [];
      }
        _private.dict[eventName].push(callback);
    },
    remove : function(eventName) {
      Object.keys(_private.dict).forEach(function(key) {
        if(key === eventName) {
          delete _private.dict[key];
        }
      });

    },
    trigger : function(eventName) {
      _private.dict[eventName].forEach(function(i) {
        i();
      });
    }

  };

} () );

var q = Object.create(eventQueue);
q.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED!");
});
q.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED AGAIN!");
});

q.trigger("PANIC_EVENT");
console.log(q.remove("PANIC_EVENT"));
//q.trigger("PANIC_EVENT");
