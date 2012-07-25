'use strict';


var Mincer = require('mincer');


var Jade = require('jade');



// Class constructor
var JadeEngine = module.exports = function JadeEngine() {
  Mincer.Template.apply(this, arguments);
};


require('util').inherits(JadeEngine, Mincer.Template);


// Render data
JadeEngine.prototype.evaluate = function (context, locals, callback) {
  try {
    var fn = Jade.compile(this.data, {filename: context.pathname});
    callback(null, fn(locals));
  } catch (err) {
    callback(err);
  }
};


// Expose default MimeType of an engine
Object.defineProperty(JadeEngine, 'defaultMimeType', {value: 'text/html'});
