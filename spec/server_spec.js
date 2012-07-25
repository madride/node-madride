/*global describe, it, before, after, beforeEach, afterEach*/



'use strict';


// stdlib
var assert = require('assert');


// 3rd-party
var connect = require('connect');


// internal
var Madride = require('..');
var Server  = Madride.Server;


////////////////////////////////////////////////////////////////////////////////


describe('Madride.Server', function () {
  var env = new Madride.Environment(__dirname + '/fixtures');
  var srv = new Madride.Server(env);

  env.appendPath('.');

  var app = connect(srv.app);

  it("should serve html", function (done) {
    app.request()
      .get('/hello.html')
      .end(function (res) {
        res.statusCode.should.equal(200);
        done();
      });
  });


  it("should serve js", function (done) {
    app.request()
      .get('/foo.js')
      .end(function (res) {
        res.statusCode.should.equal(200);
        done();
      });
  });


  it("should respond with 404 if not found", function (done) {
    app.request()
      .get('/moo.html')
      .end(function (res) {
        res.statusCode.should.equal(404);
        done();
      });
  });
});
