'use strict';


var Mincer = require('mincer');


var Environment = module.exports = function Environment() {
  Mincer.Environment.apply(this, arguments);

  this.registerEngine('.jade', require('./templates/jade'));
};


require('util').inherits(Environment, Mincer.Environment);
