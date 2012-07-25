#!/usr/bin/env node


'use strict';


var ArgumentParser  = require('argparse').ArgumentParser;
var Madride         = require('..');


require('mincer').logger.use(console);


var environment = new Madride.Environment(process.cwd());


var cli = new ArgumentParser({
  version:  require('../package.json').version,
  addHelp:  true
});


cli.addArgument(['-a', '--host'], {
  help:         'listen on HOST (default: 0.0.0.0)',
  defaultValue: '0.0.0.0'
});


cli.addArgument(['-p', '--port'], {
  help:         'use PORT (default: 3000)',
  defaultValue: '3000'
});


cli.addArgument(['paths'], {
  help:         'PATH where to find files',
  metavar:      'PATH',
  action:       'append',
  nargs:        '*',
  defaultValue: []
});


var options = cli.parseArgs();


options.paths.forEach(function (path) {
  environment.appendPath(path);
});


Madride.Server.create(environment, options).start();
