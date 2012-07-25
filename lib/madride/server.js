'use strict';


var Mincer = require('mincer');


var Server = module.exports = function Server(environment, options) {
  this.app = Mincer.createServer(environment);
  this.options = options;
};


Server.prototype.start = function () {
  require('http')
    .createServer(this.app)
    .listen(this.options.port, this.options.host);
};



Server.create = function (environment, options) {
  return new Server(environment, options);
};
