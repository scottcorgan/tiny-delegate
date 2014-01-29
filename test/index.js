var delegate = require('../index.js');
var dom = require('tiny-dom');
var trigger = require('tiny-trigger');
var test = require('tape');

test('returns a binding function', function (t) {
  var bind = delegate('body');
  
  t.equal(typeof bind, 'function', 'return function');
  t.end();
});

test('delegates click event to body', function (t) {
  document.body.appendChild(
    dom('<div class="clicker"></div><div class="no-clicker"></div>')
  );
  
  var bind = delegate('body');
  bind('.clicker', 'click', function (e) {
    t.ok(true, 'clicked it');
    t.end();
  });
  
  trigger('.clicker', 'click');
});