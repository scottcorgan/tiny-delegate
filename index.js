var element = require('tiny-element');
var closest = require('closest');

var delegate = function (parent) {
  return bind(parent);
};

var bind = function (parent) {
  return function (selector, evt, callback) {
    var parentEl = element(parent)
    
    if (!parentEl) return;
    
    parentEl.addEventListener(evt, function (e) {
      var target = e.target || e.srcElement;
      
      e.delegateTarget = closest(target, selector, true);
      if (e.delegateTarget) callback.call(parentEl, e);
    });
    
  }
};

module.exports = delegate;